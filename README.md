# SPFx UI Toolkit

A reusable UI component library built with [Fluent UI](https://developer.microsoft.com/en-us/fluentui) for [SharePoint Framework (SPFx)](https://learn.microsoft.com/en-us/sharepoint/dev/spfx/sharepoint-framework-overview) solutions. This toolkit provides a collection of pre-styled, accessible, and customizable input components to speed up SPFx web part and application development.

## ✨ Features

- 💡 Built with Fluent UI
- ♻️ Reusable across SPFx projects
- 🧩 Includes common input controls:
  - `TextInput`
  - `DropdownInput`
  - `CheckboxInput`
  - `RadioInput`
  - `DatePickerInput`
- 🧪 Supports validation and preview modes
- 🌐 TypeScript + React based

---

## 📦 Installation

```bash
npm install spfx-ui-toolkit
```
## 🔧 Usage
Import and use the components in your SPFx React component:
```
import React, { useState } from 'react';
import { TextInput, DropdownInput } from 'spfx-ui-toolkit';

const ExampleComponent = () => {
  const [text, setText] = useState('');
  const [selected, setSelected] = useState<string | undefined>();

  return (
    <div>
      <TextInput
        label="Your Name"
        value={text}
        onChange={setText}
        placeholder="Enter your name"
        required
      />

      <DropdownInput
        label="Select Country"
        options={[
          { key: 'india', text: 'India' },
          { key: 'us', text: 'USA' },
          { key: 'uk', text: 'UK' },
        ]}
        selectedKey={selected}
        onChange={(value) => setSelected(value)}
        required
      />
    </div>
  );
};

```
## License

MIT © [BharathxP](https://github.com/BharathxP)
