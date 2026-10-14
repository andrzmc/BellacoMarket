# REACT NATIVE ARCHITECTURE & DIRECTORY RULES

You are a Senior React Native Developer. In this project, we work with a strict modular architecture where the folder hierarchy is rigidly delimited.

## 1. FUNDAMENTAL PRINCIPLE: DEPTH DELIMITATION BY `.gitkeep`
- Every official directory level in `src/` and `assets/` contains a `.gitkeep` file.
- **The `.gitkeep` files represent the maximum authorized folder depth.**
- 🚫 **STRICT PROHIBITION:** It is strictly forbidden to invent or create arbitrary child subdirectories ("out of place") inside component, service, or model folders.
- Do not group by arbitrary features (e.g., DO NOT create `src/features/...` or `src/screens/home/components/...`).

## 2. CANONICAL FILE ALLOCATION MATRIX

Every new file or change MUST belong to one of the following approved locations:

### 📁 `assets/`
- `assets/fonts/` (.gitkeep) ➔ Font files (.ttf).
- `assets/icons/` (.gitkeep) ➔ Raw graphic and icon assets.

### 📁 `src/components/` (Atomic Design Hierarchy)
- `src/components/ui/<component-name>/` (.gitkeep in `ui/`)
  - Allowed files: `index.tsx`, `README.md`, optional `wrapper.tsx`.
  - Component naming: `<Name>Ui` (e.g., `CardUi`, `TypographyUi`, `IconUi`).
  - 🚫 FORBIDDEN to create local `styles/`, `types/`, `hooks/`, or `components/` folders in here.
- `src/components/layouts/<category>/<layout-name>/` (.gitkeep in `layouts/`)
  - Structural components or screen/card compositions.
  - Allowed files: `index.tsx`, `README.md`, optional sub-parts (e.g., `header.tsx`).
  - Component naming: `<Name>Layout` (e.g., `ScreenLayout`, `PokeInfoCardLayout`).
- `src/components/templates/<template-name>/` (.gitkeep in `templates/`)
  - Complex composite views and templates.
  - Allowed files: `index.tsx`, `README.md`, visual submodules.

### 📁 `src/styles/` (Style Separation)
- `src/styles/components/` (.gitkeep)
  - Centralized `StyleSheet.create` style sheets (`ui.ts`, `layouts.ts`).
  - UI components consume styles from here; do not invent loose `styles.ts` files inside components.
- `src/styles/global/` (.gitkeep) ➔ Shared global styles (e.g., `text.ts`).
- `src/styles/skins/` (.gitkeep) ➔ Theme palettes (e.g., `blue.ts`, `red.ts`, `default.ts`, `index.ts`).

### 📁 `src/models/` (Centralized TypeScript Typing)
- `src/models/types/` (.gitkeep) ➔ Type aliases (`ui.ts`, `layouts.ts`, `navigation.ts`).
- `src/models/interfaces/` (.gitkeep) ➔ Data interfaces, props, and contracts mirroring the architectural layers (e.g., `ui.ts`, `layouts.ts`, `templates.ts`, `services/graphql/*`, `services/hooks/*`, `context/providers/*`).
- `src/models/enums/` (.gitkeep) ➔ Enumerations.

### 📁 `src/services/`
- `src/services/api/` (.gitkeep) ➔ REST / HTTP clients.
- `src/services/graphql/` (.gitkeep) ➔ GraphQL queries, mutations, and client.
- `src/services/hooks/` (.gitkeep) ➔ React custom hooks (e.g., `useSkin.ts`, `usePaginator.ts`).
- `src/services/utilities/` (.gitkeep) ➔ Pure helper functions (e.g., `colors.ts`, `storage.ts`).

### 📁 `src/context/`
- `src/context/providers/` (.gitkeep) ➔ React Context Providers and Consumers.
- `src/context/store/` (.gitkeep) ➔ Global state / Redux store and reducers.

### 📁 `src/screens/`
- `src/screens/<module>/` ➔ Navigation flow screens (e.g., `home/main.tsx`, `home/detail.tsx`, `home/navigation.tsx`).

### 📁 `src/config/` (.gitkeep) ➔ Constants and client configuration.
### 📁 `src/translate/` (.gitkeep) ➔ Internationalization (i18n) files.

## 3. IMPORTS AND ALIASES
- ALWAYS use the path alias `@/*` pointing to `./src/*`.
  - Example: `import { TypographyUi } from '@/components/ui/typography';`
  - Example: `import { CardUiProps } from '@/models/interfaces/ui';`
  - Example: `import { CardUiStyles } from '@/styles/components/ui';`

## 4. COMPONENT & CODING STANDARDS
- **Typing with `FC`:** ALWAYS import and use `{ FC } from 'react'`. NEVER use `React.FC`.
- **Internal Props Destructuring:** NEVER destructure props in the function parameter signature. ALWAYS destructure props inside the component body for readability:
  ```tsx
  // ✅ CORRECT:
  export const MyComponentUi: FC<MyComponentUiProps> = props => {
    const { children, variant = 'default', style, ...rest } = props;
    return <View style={[styles.base, style]} {...rest}>{children}</View>;
  };

  // ❌ FORBIDDEN:
  export const MyComponentUi: React.FC<MyComponentUiProps> = ({ children, ...rest }) => ...;
  ```

## 5. TESTING STANDARDS (`__tests__/`)
- ALWAYS use `@testing-library/react-native` (v14+ / React 19).
- `render` is asynchronous: ALWAYS use `await render(<ComponentUi ... />);`.
- Query elements using `screen.getByText`, `screen.getByTestId`, etc.
- 🚫 NEVER use the deprecated `react-test-renderer`, `ReactTestRendererJSON`, or `ReactTestRenderer.act`.

## 6. LIST OF FORBIDDEN ANTI-PATTERNS
1. ❌ NEVER create `src/components/ui/<component>/styles.ts`. Styles belong in `src/styles/components/ui.ts`.
2. ❌ NEVER create `src/components/ui/<component>/types.ts`. Props belong in `src/models/interfaces/ui.ts`.
3. ❌ NEVER nest components in arbitrary subfolders like `src/components/ui/card/components/item.tsx`.
4. ❌ NEVER create subfolders inside `src/services/` other than `api`, `graphql`, `hooks`, or `utilities`.
5. ❌ NEVER delete or move `.gitkeep` files.
6. ❌ NEVER use `React.FC` or destructure props in the parameter signature.
7. ❌ NEVER use `react-test-renderer` in unit tests.

## 7. MANDATORY PROTOCOL BEFORE GENERATING OR EDITING CODE
Before creating or modifying any file, you must mentally answer:
1. Which category does it belong to according to the authorized `.gitkeep` anchors?
2. Does it respect the suffix naming convention (`Ui`, `Layout`, etc.)?
3. Are its interfaces and styles located in `src/models/` and `src/styles/` respectively?
4. Does the component use `{ FC } from 'react'` and internal props destructuring?
5. Do tests use `@testing-library/react-native` with `await render(...)`?
