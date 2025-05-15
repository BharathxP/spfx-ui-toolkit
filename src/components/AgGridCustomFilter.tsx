import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { IoMenuOutline } from 'react-icons/io5'
import { GrUnsorted } from 'react-icons/gr'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa6'
import { DefaultButton, PrimaryButton } from '@fluentui/react'
import moment from 'moment'
import { globalDateFormat } from '../constants/contants'

let DateTypeColumns:any = []
export const AgGridCustomFilter = (props: any) => {
  console.log(props.column.getColId())
  const [selectedValues, setSelectedValues] = useState<string[]>([])
  const [sortedColumn, setSortedColumn] = useState(props.column.getColId())
  const [agGridApi] = useState(props.api)
  const [columnApiHook] = useState(props.column)
  const [uniqueValues, setUniqueValues] = useState<string[]>([])
  const [sortOrder, setSortOrder] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const iconRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [startDate, setStartDate] = useState<string | null>(null)
  const [endDate, setEndDate] = useState<string | null>(null)
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
    width: 200
  })

  useEffect(() => {
    const handleClearFilters = () => {
      setSelectedValues([]) // ✅ Clear selected filters
      setSearchTerm('') // ✅ Clear search input
      setStartDate(null)
      setEndDate(null)
      setSortOrder(null)
    }

    window.addEventListener('clear-ag-filters', handleClearFilters)
    return () => {
      window.removeEventListener('clear-ag-filters', handleClearFilters)
    }
  }, [])

  useEffect(() => {
    const handleClearSorting = () => {
      setSortOrder(null)
    }

    window.addEventListener('clear-ag-sorting', handleClearSorting)
    return () => {
      window.removeEventListener('clear-ag-sorting', handleClearSorting)
    }
  }, [])

  useEffect(() => {
    const values = new Set<string>()
    let hasEmpty = false
    const columnId = props.column.getColId()

    props.api.forEachNode((node) => {
      const value = node.data[columnId]
      if (value === undefined || value === null || value === '') {
        hasEmpty = true
      } else {
        values.add(value.toString())
      }
    })

    let sortedValues = Array.from(values).sort()
    if (hasEmpty) sortedValues.unshift('(Empty)')

    setUniqueValues(sortedValues)

    // ✅ Sync existing filter selections
    const savedState = JSON.parse(
      localStorage.getItem('ThirdPartyagGridState') || '{}'
    )
    if (savedState.filterState && savedState.filterState[columnId]) {
      let existingFilters: any = []
      if (savedState?.filterState[columnId]?.conditions?.length > 0) {
        savedState.filterState[columnId].conditions?.map((item) => {
          if (item.type == 'blank') {
            existingFilters.push('(Empty)')
          } else {
            existingFilters.push(item.filter)
          }
        })
      } else {
        if (savedState.filterState[columnId]?.type == 'blank') {
          existingFilters.push('(Empty)')
        } else {
          existingFilters.push(savedState.filterState[columnId]?.filter)
        }
      }
      setSelectedValues(existingFilters)
    }

    const currentSortState = savedState?.columnState?.find(
      (col) => col.colId === props.column.getColId()
    )?.sort
    setSortOrder(currentSortState)
  }, [agGridApi, columnApiHook, isOpen, sortedColumn])

  const handleCheckboxChange = (value: string) => {
    setSelectedValues((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    )
  }

  const applyFilters = () => {
    const currentFilterModel = props.api.getFilterModel() || {}
    const columnId = props.column.getColId()
    let conditions: any = []
    if (DateTypeColumns.includes(columnId) && startDate && endDate) {
      //   const formattedStart = moment(startDate, "YYYY-MM-DD").format("MM/DD/YYYY");
      // const formattedEnd = moment(endDate, "YYYY-MM-DD").format("MM/DD/YYYY");
      conditions.push({
        filterType: 'date',
        type: 'inRange',
        dateFrom: startDate,
        dateTo: endDate
      })
    } else {
      conditions = selectedValues.map((value) => {
        if (value === '(Empty)') {
          return { filterType: 'text', type: 'blank' } // ✅ Filter empty values
        }
        return { filterType: 'text', type: 'equals', filter: value }
      })

      if (selectedValues.includes('(Empty)')) {
        conditions.push({ filterType: 'text', type: 'blanks' })
      }
    }

    currentFilterModel[columnId] = selectedValues.length
      ? { operator: 'OR', conditions } // ✅ Now correctly applies multiple filters
      : null

    props.api.setFilterModel(currentFilterModel)
    props.api.onFilterChanged()

    const savedState = JSON.parse(
      localStorage.getItem('ThirdPartyagGridState') || '{}'
    )
    savedState.filterState = currentFilterModel
    localStorage.setItem('ThirdPartyagGridState', JSON.stringify(savedState))

    setIsOpen(false)
  }

  const clearFilters = () => {
    const columnId = props.column.getColId()
    const currentFilterModel = props.api.getFilterModel() || {}

    delete currentFilterModel[columnId] // ✅ Remove only this column's filter

    props.api.setFilterModel(currentFilterModel)
    props.api.onFilterChanged()

    // ✅ Update `localStorage` to remove only this column's filter
    const savedState = JSON.parse(
      localStorage.getItem('ThirdPartyagGridState') || '{}'
    )
    if (savedState.filterState) {
      delete savedState.filterState[columnId]
    }
    localStorage.setItem('ThirdPartyagGridState', JSON.stringify(savedState))

    setSelectedValues([])
    setSearchTerm('')
    setStartDate(null)
    setEndDate(null)
    setIsOpen(false)
  }

  const handleSort = () => {
    window.dispatchEvent(new Event('clear-ag-sorting'))
    const columnId = props.column.getColId()
    const columnState = props.columnApi.getColumnState()

    // Get current sort order
    const currentSort = columnState.find((col) => col.colId === columnId)?.sort
    const newSortOrder: any =
      currentSort === 'asc' ? 'desc' : currentSort === 'desc' ? null : 'asc'

    setSortOrder(newSortOrder)
    setSortedColumn(columnId)
    // Reset sorting for all columns and apply new sorting to the clicked column
    const updatedState: any = columnState.map((col) => ({
      colId: col.colId,
      sort: col.colId === columnId ? newSortOrder : null // Only sort the clicked column
    }))

    // Apply updated sorting state
    props.columnApi.applyColumnState({
      state: updatedState,
      applyOrder: true // Ensures sorting is applied correctly
    })
  }

  const updateDropdownPosition = () => {
    if (iconRef.current) {
      const rect = iconRef.current.getBoundingClientRect()
      setDropdownPosition({
        top: rect.bottom + window.scrollY + 5,
        left: rect.left + window.scrollX,
        width: Math.max(rect.width, 200)
      })
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        iconRef.current &&
        !iconRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (isOpen) {
      updateDropdownPosition()
      window.addEventListener('scroll', updateDropdownPosition, true)
      window.addEventListener('resize', updateDropdownPosition)
    }
    return () => {
      window.removeEventListener('scroll', updateDropdownPosition, true)
      window.removeEventListener('resize', updateDropdownPosition)
    }
  }, [isOpen])

  return (
    <React.Fragment>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '13px',
            color: '#010e3a'
          }}
          onClick={handleSort}
        >
          <span style={{ marginRight: '10px' }}>{props.displayName}</span>
          {sortOrder === null
            ? (GrUnsorted({}) as JSX.Element)
            : sortOrder === 'asc'
            ? (FaArrowUp({}) as JSX.Element)
            : (FaArrowDown({}) as JSX.Element)}
        </div>

        {/* Filter Icon */}
        <div
          ref={iconRef}
          onClick={() => setIsOpen(!isOpen)}
          style={{
            marginLeft: '5px',
            cursor: 'pointer',
            fontSize: '12px',
            color:
              selectedValues.length > 0 ||
              (DateTypeColumns.includes(props.column.getColId()) &&
                startDate &&
                endDate)
                ? '#007bff'
                : '#000'
          }}
        >
          {IoMenuOutline({style:{width:'20px', height:'15px'}}) as JSX.Element}
        </div>
      </div>

      {isOpen &&
        ReactDOM.createPortal(
          <div
            ref={dropdownRef}
            style={{
              position: 'absolute',
              top: dropdownPosition.top,
              left: dropdownPosition.left,
              width: dropdownPosition.width,
              minWidth: '200px',
              maxWidth: '300px',
              maxHeight: '300px',
              overflowY: 'auto',
              backgroundColor: 'white',
              border: '1px solid #ccc',
              borderRadius: '5px',
              zIndex: 9999,
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              fontFamily:
                'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'
            }}
          >
            <input
              type='text'
              placeholder='Search...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '82%',
                padding: '5px',
                fontSize: '12px',
                margin: '10px auto',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />

            {/* Checkbox List */}
            <div style={{ flex: '1', overflowY: 'auto', padding: '5px' }}>
              {uniqueValues
                .filter((option) =>
                  option.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((option) => (
                  <label
                    key={option}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '5px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      width: '90%',
                      position: 'relative'
                    }}
                    title={option} // Show full text on hover
                  >
                    <input
                      type='checkbox'
                      checked={selectedValues.includes(option)}
                      onChange={() => handleCheckboxChange(option)}
                      style={{ marginRight: '5px' }}
                    />
                    {DateTypeColumns.includes(props.column.getColId()) &&
                    option != '(Empty)'
                      ? moment(option).format(globalDateFormat) !=
                        'Invalid date'
                        ? moment(option).format(globalDateFormat)
                        : ''
                      : option}
                  </label>
                ))}
            </div>

            {/* Fixed Buttons at the Bottom */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px',
                borderTop: '1px solid #ccc',
                backgroundColor: 'white',
                position: 'sticky',
                bottom: '0',
                fontFamily:
                  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'
              }}
            >
              <PrimaryButton
                style={{
                  maxWidth: '80px',
                  marginRight: '10px',
                  backgroundColor: '#001a70'
                }}
                onClick={applyFilters}
              >
                Apply
              </PrimaryButton>
              <DefaultButton
                onClick={clearFilters}
                style={{ fontSize: '12px' }}
              >
                Clear All
              </DefaultButton>
            </div>
          </div>,
          document.body
        )}
    </React.Fragment>
  )
}
