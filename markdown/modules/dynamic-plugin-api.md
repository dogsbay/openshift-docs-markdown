{%- set power_bi_url = "https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.requestinit.html" %}

{%- set _mod_docs_content_type = "REFERENCE" %}
# Dynamic plugin API {id="dynamic-plugin-api_{{ context }}"}

## `useActivePerspective` {id="_useactiveperspective"}

Hook that provides the currently active perspective and a callback for setting the active perspective. It returns a tuple containing the current active perspective and setter callback. {._abstract}

**Example**
```tsx
const Component: React.FC = (props) => {
   const [activePerspective, setActivePerspective] = useActivePerspective();
   return <select
     value={activePerspective}
     onChange={(e) => setActivePerspective(e.target.value)}
   >
     {
       // ...perspective options
     }
   </select>
}
```

## `GreenCheckCircleIcon` {id="_greencheckcircleicon"}

Component for displaying a checkmark circle icon.

**Example**
```tsx
<GreenCheckCircleIcon title="Healthy" />
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `className` | (optional) additional class name for the component |
| `title` | (optional) icon title |
| `size` | (optional) icon size: (`sm`, `md`, `lg`, `xl`) |

## `RedExclamationCircleIcon` {id="_redexclamationcircleicon"}

Component for displaying an exclamation mark circle icon.

**Example**
```tsx
<RedExclamationCircleIcon title="Failed" />
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `className` | (optional) additional class name for the component |
| `title` | (optional) icon title |
| `size` | (optional) icon size: (`sm`, `md`, `lg`, `xl`) |

## `YellowExclamationTriangleIcon` {id="_yellowexclamationtriangleicon"}

Component for displaying a triangle exclamation icon.

**Example**
```tsx
<YellowExclamationTriangleIcon title="Warning" />
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `className` | (optional) additional class name for the component |
| `title` | (optional) icon title |
| `size` | (optional) icon size: (`sm`, `md`, `lg`, `xl`) |

## `BlueInfoCircleIcon` {id="_blueinfocircleicon"}

Component for displaying a blue info circle icon.

**Example**
```tsx
<BlueInfoCircleIcon title="Info" />
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `className` | (optional) additional class name for the component |
| `title` | (optional) icon title |
| `size` | (optional) icon size: ('sm', 'md', 'lg', 'xl') |

## `ErrorStatus` {id="_errorstatus"}

Component for displaying an error status popover.

**Example**
```tsx
<ErrorStatus title={errorMsg} />
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `title` | (optional) status text |
| `iconOnly` | (optional) if true, only displays icon |
| `noTooltip` | (optional) if true, tooltip is not displayed |
| `className` | (optional) additional class name for the component |
| `popoverTitle` | (optional) title for popover |

## `InfoStatus` {id="_infostatus"}

Component for displaying an information status popover.

**Example**
```tsx
<InfoStatus title={infoMsg} />
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `title` | (optional) status text |
| `iconOnly` | (optional) if true, only displays icon |
| `noTooltip` | (optional) if true, tooltip is not displayed |
| `className` | (optional) additional class name for the component |
| `popoverTitle` | (optional) title for popover |

## `ProgressStatus` {id="_progressstatus"}

Component for displaying a progressing status popover.

**Example**
```tsx
<ProgressStatus title={progressMsg} />
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `title` | (optional) status text |
| `iconOnly` | (optional) if true, only displays icon |
| `noTooltip` | (optional) if true, tooltip is not displayed |
| `className` | (optional) additional class name for the component |
| `popoverTitle` | (optional) title for popover |

## `SuccessStatus` {id="_successstatus"}

Component for displaying a success status popover.

**Example**
```tsx
<SuccessStatus title={successMsg} />
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `title` | (optional) status text |
| `iconOnly` | (optional) if true, only displays icon |
| `noTooltip` | (optional) if true, tooltip is not displayed |
| `className` | (optional) additional class name for the component |
| `popoverTitle` | (optional) title for popover |

## `checkAccess` {id="_checkaccess"}

Provides information about user access to a given resource. It returns an object with resource access information.

|     |     |
| --- | --- |
| Parameter Name | Description |
| `resourceAttributes` | resource attributes for access review |
| `impersonate` | impersonation details |

## `useAccessReview` {id="_useaccessreview"}

Hook that provides information about user access to a given resource. It returns an array with `isAllowed` and `loading` values.

|     |     |
| --- | --- |
| Parameter Name | Description |
| `resourceAttributes` | resource attributes for access review |
| `impersonate` | impersonation details |

## `useResolvedExtensions` {id="_useresolvedextensions"}

React hook for consuming Console extensions with resolved `CodeRef` properties. This hook accepts the same argument(s) as `useExtensions` hook and returns an adapted list of extension instances, resolving all code references within each extension’s properties.

Initially, the hook returns an empty array. After the resolution is complete, the React component is re-rendered with the hook returning an adapted list of extensions. When the list of matching extensions changes, the resolution is restarted. The hook continues to return the previous result until the resolution completes.

The hook’s result elements are guaranteed to be referentially stable across re-renders. It returns a tuple containing a list of adapted extension instances with resolved code references, a boolean flag indicating whether the resolution is complete, and a list of errors detected during the resolution.

**Example**
```ts
const [navItemExtensions, navItemsResolved] = useResolvedExtensions<NavItem>(isNavItem);
// process adapted extensions and render your component
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `typeGuards` | A list of callbacks that each accept a dynamic plugin extension as an argument and return a boolean flag indicating whether or not the extension meets desired type constraints |

## `HorizontalNav` {id="_horizontalnav"}

A component that creates a Navigation bar for a page. Routing is handled as part of the component. `console.tab/horizontalNav` can be used to add additional content to any horizontal navigation.

**Example**

```jsx
const HomePage: React.FC = (props) => {
    const page = {
      href: 'home',
      name: 'Home',
      component: () => <>Home</>
    }
    return <HorizontalNav match={props.match} pages={[page]} />
}
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `resource` | The resource associated with this Navigation, an object of K8sResourceCommon type |
| `pages` | An array of page objects |
| `match` | match object provided by React Router |

## `TableData` {id="_tabledata"}

Component for displaying table data within a table row.

**Example**

```jsx
const PodRow: React.FC<RowProps<K8sResourceCommon>> = ({ obj, activeColumnIDs }) => {
  return (
    <>
      <TableData id={columns[0].id} activeColumnIDs={activeColumnIDs}>
        <ResourceLink kind="Pod" name={obj.metadata.name} namespace={obj.metadata.namespace} />
      </TableData>
      <TableData id={columns[1].id} activeColumnIDs={activeColumnIDs}>
        <ResourceLink kind="Namespace" name={obj.metadata.namespace} />
      </TableData>
    </>
  );
};
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `id` | unique ID for table |
| `activeColumnIDs` | active columns |
| `className` | (optional) option class name for styling |

## `useActiveColumns` {id="_useactivecolumns"}

A hook that provides a list of user-selected active TableColumns.

**Example**
```text
// See implementation for more details on TableColumn type
  const [activeColumns, userSettingsLoaded] = useActiveColumns({
    columns,
    showNamespaceOverride: false,
    columnManagementID,
  });
  return userSettingsAreLoaded ? <VirtualizedTable columns={activeColumns} {...otherProps} /> : null
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `options` | Which are passed as a key-value map |
| `\{TableColumn[]} options.columns` | An array of all available TableColumns |
| `{boolean} [options.showNamespaceOverride]` | (optional) If true, a namespace column is included, regardless of column management selections |
| `{string} [options.columnManagementID]` | (optional) A unique ID used to persist and retrieve column management selections to and from user settings. Usually a group/version/kind (GVK) string for a resource. |

A tuple containing the current user selected active columns (a subset of options.columns), and a boolean flag indicating whether user settings have been loaded.

## `ListPageHeader` {id="_listpageheader"}

Component for generating a page header.

**Example**
```jsx
const exampleList: React.FC = () => {
  return (
    <>
      <ListPageHeader title="Example List Page"/>
    </>
  );
};
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `title` | heading title |
| `helpText` | (optional) help section as react node |
| `badge` | (optional) badge icon as react node |

## `ListPageCreate` {id="_listpagecreate"}

Component for adding a create button for a specific resource kind that automatically generates a link to the create YAML for this resource.

**Example**
```jsx
const exampleList: React.FC<MyProps> = () => {
  return (
    <>
      <ListPageHeader title="Example Pod List Page"/>
        <ListPageCreate groupVersionKind="Pod">Create Pod</ListPageCreate>
      </ListPageHeader>
    </>
  );
};
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `groupVersionKind` | the resource group/version/kind to represent |

## `ListPageCreateLink` {id="_listpagecreatelink"}

Component for creating a stylized link.

**Example**
```jsx
const exampleList: React.FC<MyProps> = () => {
 return (
  <>
   <ListPageHeader title="Example Pod List Page"/>
      <ListPageCreateLink to={'/link/to/my/page'}>Create Item</ListPageCreateLink>
   </ListPageHeader>
  </>
 );
};
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `to` | string location where link should direct |
| `createAccessReview` | (optional) object with namespace and kind used to determine access |
| `children` | (optional) children for the component |

## `ListPageCreateButton` {id="_listpagecreatebutton"}

Component for creating button.

**Example**
```jsx
const exampleList: React.FC<MyProps> = () => {
  return (
    <>
      <ListPageHeader title="Example Pod List Page"/>
        <ListPageCreateButton createAccessReview={access}>Create Pod</ListPageCreateButton>
      </ListPageHeader>
    </>
  );
};
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `createAccessReview` | (optional) object with namespace and kind used to determine access |
| `pfButtonProps` | (optional) Patternfly Button props |

## `ListPageCreateDropdown` {id="_listpagecreatedropdown"}

Component for creating a dropdown wrapped with permissions check.

**Example**
```jsx
const exampleList: React.FC<MyProps> = () => {
  const items = {
    SAVE: 'Save',
    DELETE: 'Delete',
  }
  return (
    <>
     <ListPageHeader title="Example Pod List Page"/>
       <ListPageCreateDropdown createAccessReview={access} items={items}>Actions</ListPageCreateDropdown>
     </ListPageHeader>
    </>
  );
};
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `items` | key:ReactNode pairs of items to display in dropdown component |
| `onClick` | callback function for click on dropdown items |
| `createAccessReview` | (optional) object with namespace and kind used to determine access |
| `children` | (optional) children for the dropdown toggle |

## `ResourceLink` {id="_resourcelink"}

Component that creates a link to a specific resource type with an icon badge.

**Example**
```tsx
  <ResourceLink
      kind="Pod"
      name="testPod"
      title={metadata.uid}
  />
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `kind` | (optional) the kind of resource i.e. Pod, Deployment, Namespace |
| `groupVersionKind` | (optional) object with group, version, and kind |
| `className` | (optional) class style for component |
| `displayName` | (optional) display name for component, overwrites the resource name if set |
| `inline` | (optional) flag to create icon badge and name inline with children |
| `linkTo` | (optional) flag to create a Link object - defaults to true |
| `name` | (optional) name of resource |
| `namespace` | (optional) specific namespace for the kind resource to link to |
| `hideIcon` | (optional) flag to hide the icon badge |
| `title` | (optional) title for the link object (not displayed) |
| `dataTest` | (optional) identifier for testing |
| `onClick` | (optional) callback function for when component is clicked |
| `truncate` | (optional) flag to truncate the link if too long |

## `ResourceIcon` {id="_resourceicon"}

Component that creates an icon badge for a specific resource type.

**Example**
```tsx
<ResourceIcon kind="Pod"/>
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `kind` | (optional) the kind of resource i.e. Pod, Deployment, Namespace |
| `groupVersionKind` | (optional) object with group, version, and kind |
| `className` | (optional) class style for component |

## `useK8sModel` {id="_usek8smodel"}

Hook that retrieves the k8s model for provided K8sGroupVersionKind from redux. It returns an array with the first item as k8s model and second item as `inFlight` status.

**Example**
```ts
const Component: React.FC = () => {
  const [model, inFlight] = useK8sModel({ group: 'app'; version: 'v1'; kind: 'Deployment' });
  return ...
}
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `groupVersionKind` | group, version, kind of k8s resource K8sGroupVersionKind is preferred alternatively can pass reference for group, version, kind which is deprecated, i.e, group/version/kind (GVK) K8sResourceKindReference. |

## `useK8sModels` {id="_usek8smodels"}

Hook that retrieves all current k8s models from redux. It returns an array with the first item as the list of k8s model and second item as `inFlight` status.

**Example**
```ts
const Component: React.FC = () => {
  const [models, inFlight] = UseK8sModels();
  return ...
}
```

## `useK8sWatchResource` {id="_usek8swatchresource"}

Hook that retrieves the k8s resource along with status for loaded and error. It returns an array with first item as resource(s), second item as loaded status and third item as error state if any.

**Example**
```ts
const Component: React.FC = () => {
  const watchRes = {
        ...
      }
  const [data, loaded, error] = useK8sWatchResource(watchRes)
  return ...
}
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `initResource` | options needed to watch for resource. |

## `useK8sWatchResources` {id="_usek8swatchresources"}

Hook that retrieves the k8s resources along with their respective status for loaded and error. It returns a map where keys are as provided in initResources and value has three properties data, loaded and error.

**Example**
```tsx
const Component: React.FC = () => {
  const watchResources = {
        'deployment': {...},
        'pod': {...}
        ...
      }
  const {deployment, pod} = useK8sWatchResources(watchResources)
  return ...
}
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `initResources` | Resources must be watched as key-value pair, wherein key is unique to resource and value is options needed to watch for the respective resource. |

## `consoleFetch` {id="_consolefetch"}

A custom wrapper around `fetch` that adds console specific headers and allows for retries and timeouts.It also validates the response status code and throws appropriate error or logs out the user if required. It returns a promise that resolves to the response.

|     |     |
| --- | --- |
| Parameter Name | Description |
| `url` | The URL to fetch |
| `options` | The options to pass to fetch |
| `timeout` | The timeout in milliseconds |

## `consoleFetchJSON` {id="_consolefetchjson"}

A custom wrapper around `fetch` that adds console specific headers and allows for retries and timeouts. It also validates the response status code and throws appropriate error or logs out the user if required. It returns the response as a JSON object. Uses `consoleFetch` internally. It returns a promise that resolves to the response as JSON object.

|     |     |
| --- | --- |
| Parameter Name | Description |
| `url` | The URL to fetch |
| `method` | The HTTP method to use. Defaults to GET |
| `options` | The options to pass to fetch |
| `timeout` | The timeout in milliseconds |
| `cluster` | The name of the cluster to make the request to. Defaults to the active cluster the user has selected |

## `consoleFetchText` {id="_consolefetchtext"}

A custom wrapper around `fetch` that adds console specific headers and allows for retries and timeouts. It also validates the response status code and throws appropriate error or logs out the user if required. It returns the response as a text. Uses `consoleFetch` internally. It returns a promise that resolves to the response as text.

|     |     |
| --- | --- |
| Parameter Name | Description |
| `url` | The URL to fetch |
| `options` | The options to pass to fetch |
| `timeout` | The timeout in milliseconds |
| `cluster` | The name of the cluster to make the request to. Defaults to the active cluster the user has selected |

## `getConsoleRequestHeaders` {id="_getconsolerequestheaders"}

A function that creates impersonation and multicluster related headers for API requests using current redux state. It returns an object containing the appropriate impersonation and cluster request headers, based on redux state.

|     |     |
| --- | --- |
| Parameter Name | Description |
| `targetCluster` | Override the current active cluster with the provided targetCluster |

## `k8sGetResource` {id="_k8sgetresource"}

It fetches a resource from the cluster, based on the provided options. If the name is provided it returns one resource else it returns all the resources matching the model. It returns a promise that resolves to the response as JSON object with a resource if the name is provided else it returns all the resources matching the
model. In case of failure, the promise gets rejected with HTTP error response.

|     |     |
| --- | --- |
| Parameter Name | Description |
| `options` | Which are passed as key-value pairs in the map |
| `options.model` | k8s model |
| `options.name` | The name of the resource, if not provided then it looks for all the resources matching the model. |
| `options.ns` | The namespace to look into, should not be specified for cluster-scoped resources. |
| `options.path` | Appends as subpath if provided |
| `options.queryParams` | The query parameters to be included in the URL. |
| `options.requestInit` | The fetch init object to use. This can have request headers, method, redirect, etc.  |

## `k8sCreateResource` {id="_k8screateresource"}

It creates a resource in the cluster, based on the provided options. It returns a promise that resolves to the response of the resource created. In case of failure promise gets rejected with HTTP error response.

|     |     |
| --- | --- |
| Parameter Name | Description |
| `options` | Which are passed as key-value pairs in the map |
| `options.model` | k8s model |
| `options.data` | Payload for the resource to be created |
| `options.path` | Appends as subpath if provided |
| `options.queryParams` | The query parameters to be included in the URL. |

## `k8sUpdateResource` {id="_k8supdateresource"}

It updates the entire resource in the cluster, based on provided options. When a client needs to replace an existing resource entirely, they can use k8sUpdate. Alternatively can use k8sPatch to perform the partial update. It returns a promise that resolves to the response of the resource updated. In case of failure promise gets rejected with HTTP error response.

|     |     |
| --- | --- |
| Parameter Name | Description |
| `options` | Which are passed as key-value pair in the map |
| `options.model` | k8s model |
| `options.data` | Payload for the k8s resource to be updated |
| `options.ns` | Namespace to look into, it should not be specified for cluster-scoped resources. |
| `options.name` | Resource name to be updated. |
| `options.path` | Appends as subpath if provided |
| `options.queryParams` | The query parameters to be included in the URL. |

## `k8sPatchResource` {id="_k8spatchresource"}

It patches any resource in the cluster, based on provided options. When a client needs to perform the partial update, they can use
k8sPatch. Alternatively can use k8sUpdate to replace an existing resource entirely. See [Data Tracker](https://datatracker.ietf.org/doc/html/rfc6902) for more. It returns a promise that resolves to the response of the resource patched. In case of failure promise gets rejected with HTTP error response.

|     |     |
| --- | --- |
| Parameter Name | Description |
| `options` | Which are passed as key-value pairs in the map. |
| `options.model` | k8s model |
| `options.resource` | The resource to be patched. |
| `options.data` | Only the data to be patched on existing resource with the operation, path, and value. |
| `options.path` | Appends as subpath if provided. |
| `options.queryParams` | The query parameters to be included in the URL. |

## `k8sDeleteResource` {id="_k8sdeleteresource"}

It deletes resources from the cluster, based on the provided model, resource. The garbage collection works based on `Foreground`|`Background` can be configured with propagationPolicy property in provided model or passed in json. It returns a promise that resolves to the response of kind Status. In case of failure promise gets rejected with HTTP error response.

**Example**
`kind: 'DeleteOptions', apiVersion: 'v1', propagationPolicy`

|     |     |
| --- | --- |
| Parameter Name | Description |
| `options` | Which are passed as key-value pair in the map. |
| `options.model` | k8s model |
| `options.resource` | The resource to be deleted. |
| `options.path` | Appends as subpath if provided |
| `options.queryParams` | The query parameters to be included in the URL. |
| `options.requestInit` | The fetch init object to use. This can have request headers, method, redirect, etc. See [Interface RequestInit]({{ power_bi_url }}) for more. |
| `options.json` | Can control garbage collection of resources explicitly if provided or else it defaults to the model’s "propagationPolicy". |

## `k8sListResource` {id="_k8slistresource"}

Lists the resources as an array in the cluster, based on provided options. It returns a promise that resolves to the response.

|     |     |
| --- | --- |
| Parameter Name | Description |
| `options` | Which are passed as key-value pairs in the map |
| `options.model` | k8s model |
| `options.queryParams` | The query parameters to be included in the URL and can pass label selector’s as well with key "labelSelector". |
| `options.requestInit` | The fetch init object to use. This can have request headers, method, redirect, etc. See [Interface RequestInit]({{ power_bi_url }}) for more. |

## `k8sListResourceItems` {id="_k8slistresourceitems"}

Same interface as k8sListResource but returns the sub items. It returns the apiVersion for the model, i.e., `group/version`.

## `getAPIVersionForModel` {id="_getapiversionformodel"}

Provides apiVersion for a k8s model.

|     |     |
| --- | --- |
| Parameter Name | Description |
| `model` | k8s model |

## `getGroupVersionKindForResource` {id="_getgroupversionkindforresource"}

Provides a group, version, and kind for a resource. It returns the group, version, kind for the provided resource. If the resource does not have an API group, group "core" is returned. If the resource has an invalid apiVersion, then it throws an Error.

|     |     |
| --- | --- |
| Parameter Name | Description |
| `resource` | k8s resource |

## `getGroupVersionKindForModel` {id="_getgroupversionkindformodel"}

Provides a group, version, and kind for a k8s model. This returns the group, version, kind for the provided model. If the model does not have an apiGroup, group "core" is returned.

|     |     |
| --- | --- |
| Parameter Name | Description |
| `model` | k8s model |

## `StatusPopupSection` {id="_statuspopupsection"}

Component that shows the status in a popup window. Helpful component for building `console.dashboards/overview/health/resource` extensions.

**Example**
```tsx
  <StatusPopupSection
    firstColumn={
      <>
        <span>{title}</span>
        <span className="text-secondary">
          My Example Item
        </span>
      </>
    }
    secondColumn='Status'
  >
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `firstColumn` | values for first column of popup |
| `secondColumn` | (optional) values for second column of popup |
| `children` | (optional) children for the popup |

## `StatusPopupItem` {id="_statuspopupitem"}

Status element used in status popup; used in `StatusPopupSection`.

**Example**
```text
<StatusPopupSection
   firstColumn='Example'
   secondColumn='Status'
>
   <StatusPopupItem icon={healthStateMapping[MCGMetrics.state]?.icon}>
      Complete
   </StatusPopupItem>
   <StatusPopupItem icon={healthStateMapping[RGWMetrics.state]?.icon}>
       Pending
   </StatusPopupItem>
</StatusPopupSection>
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `value` | (optional) text value to display |
| `icon` | (optional) icon to display |
| `children` | child elements |

## `Overview` {id="_overview"}

Creates a wrapper component for a dashboard.

```text title="Example"
    <Overview>
      <OverviewGrid mainCards={mainCards} leftCards={leftCards} rightCards={rightCards} />
    </Overview>
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `className` | (optional) style class for div |
| `children` | (optional) elements of the dashboard |

## `OverviewGrid` {id="_overviewgrid"}

Creates a grid of card elements for a dashboard; used within `Overview`.

```text title="Example"
    <Overview>
      <OverviewGrid mainCards={mainCards} leftCards={leftCards} rightCards={rightCards} />
    </Overview>
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `mainCards` | cards for grid |
| `leftCards` | (optional) cards for left side of grid |
| `rightCards` | (optional) cards for right side of grid |

## `InventoryItem` {id="_inventoryitem"}

Creates an inventory card item.

```tsx title="Example"
  return (
    <InventoryItem>
      <InventoryItemTitle>{title}</InventoryItemTitle>
      <InventoryItemBody error={loadError}>
        {loaded && <InventoryItemStatus count={workerNodes.length} icon={<MonitoringIcon />} />}
      </InventoryItemBody>
    </InventoryItem>
  )
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `children` | elements to render inside the item |

## `InventoryItemTitle` {id="_inventoryitemtitle"}

Creates a title for an inventory card item; used within `InventoryItem`.

```tsx title="Example"
 return (
   <InventoryItem>
     <InventoryItemTitle>{title}</InventoryItemTitle>
     <InventoryItemBody error={loadError}>
       {loaded && <InventoryItemStatus count={workerNodes.length} icon={<MonitoringIcon />} />}
     </InventoryItemBody>
   </InventoryItem>
 )
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `children` | elements to render inside the title |

## `InventoryItemBody` {id="_inventoryitembody"}

Creates the body of an inventory card; used within `InventoryCard` and can be used with `InventoryTitle`.

```tsx title="Example"
 return (
   <InventoryItem>
     <InventoryItemTitle>{title}</InventoryItemTitle>
     <InventoryItemBody error={loadError}>
       {loaded && <InventoryItemStatus count={workerNodes.length} icon={<MonitoringIcon />} />}
     </InventoryItemBody>
   </InventoryItem>
 )
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `children` | elements to render inside the Inventory Card or title |
| `error` | elements of the div |

## `InventoryItemStatus` {id="_inventoryitemstatus"}

Creates a count and icon for an inventory card with optional link address; used within `InventoryItemBody`

```tsx title="Example"
 return (
   <InventoryItem>
     <InventoryItemTitle>{title}</InventoryItemTitle>
     <InventoryItemBody error={loadError}>
       {loaded && <InventoryItemStatus count={workerNodes.length} icon={<MonitoringIcon />} />}
     </InventoryItemBody>
   </InventoryItem>
 )
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `count` | count for display |
| `icon` | icon for display |
| `linkTo` | (optional) link address |

## `InventoryItemLoading` {id="_inventoryitemloading"}

Creates a skeleton container for when an inventory card is loading; used with `InventoryItem` and related components

```tsx title="Example"
if (loadError) {
   title = <Link to={workerNodesLink}>{t('Worker Nodes')}</Link>;
} else if (!loaded) {
  title = <><InventoryItemLoading /><Link to={workerNodesLink}>{t('Worker Nodes')}</Link></>;
}
return (
  <InventoryItem>
    <InventoryItemTitle>{title}</InventoryItemTitle>
  </InventoryItem>
)
```

## `useFlag` {id="_useflag"}

Hook that returns the given feature flag from FLAGS redux state. It returns the boolean value of the requested feature flag or undefined.

|     |     |
| --- | --- |
| Parameter Name | Description |
| `flag` | The feature flag to return |

## `CodeEditor` {id="_codeeditor"}

A basic lazy loaded Code editor with hover help and completion.

```text title="Example"
<React.Suspense fallback={<LoadingBox />}>
  <CodeEditor
    value={code}
    language="yaml"
  />
</React.Suspense>
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `value` | String representing the yaml code to render. |
| `language` | String representing the language of the editor. |
| `options` | Monaco editor options. For more details, please, visit [Interface IStandAloneEditorConstructionOptions](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneEditorConstructionOptions.html). |
| `minHeight` | Minimum editor height in valid CSS height values. |
| `showShortcuts` | Boolean to show shortcuts on top of the editor. |
| `toolbarLinks` | Array of ReactNode rendered on the toolbar links section on top of the editor. |
| `onChange` | Callback for on code change event. |
| `onSave` | Callback called when the command CTRL / CMD + S is triggered. |
| `ref` | React reference to `{ editor?: IStandaloneCodeEditor }`. Using the `editor` property, you are able to access to all methods to control the editor. For more information, visit [Interface IStandaloneCodeEditor](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneCodeEditor.html). |

## `ResourceYAMLEditor` {id="_resourceyamleditor"}

A lazy loaded YAML editor for Kubernetes resources with hover help and completion. The component use the YAMLEditor and add on top of it more functionality like resource update handling, alerts, save, cancel and reload buttons, accessibility and more. Unless `onSave` callback is provided, the resource update is automatically handled. It should be wrapped in a `React.Suspense` component.

```text title="Example"
<React.Suspense fallback={<LoadingBox />}>
  <ResourceYAMLEditor
    initialResource={resource}
    header="Create resource"
    onSave={(content) => updateResource(content)}
  />
</React.Suspense>
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `initialResource` | YAML/Object representing a resource to be shown by the editor. This prop is used only during the initial render |
| `header` | Add a header on top of the YAML editor |
| `onSave` | Callback for the Save button. Passing it overrides the default update performed on the resource by the editor |

## `ResourceEventStream` {id="_resourceeventstream"}

A component to show events related to a particular resource.

```tsx title="Example"
const [resource, loaded, loadError] = useK8sWatchResource(clusterResource);
return <ResourceEventStream resource={resource} />
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `resource` | An object whose related events should be shown. |

## `usePrometheusPoll` {id="_useprometheuspoll"}

Sets up a poll to Prometheus for a single query. It returns a tuple containing the query response, a boolean flag indicating whether the response has completed, and any errors encountered during the request or post-processing of the request.

|     |     |
| --- | --- |
| Parameter Name | Description |
| `{PrometheusEndpoint} props.endpoint` | one of the PrometheusEndpoint (label, query, range, rules, targets) |
| `{string} [props.query]` | (optional) Prometheus query string. If empty or undefined, polling is not started. |
| `{number} [props.delay]` | (optional) polling delay interval (ms) |
| `{number} [props.endTime]` | (optional) for QUERY_RANGE endpoint, end of the query range |
| `{number} [props.samples]` | (optional) for QUERY_RANGE endpoint |
| `{number} [options.timespan]` | (optional) for QUERY_RANGE endpoint |
| `{string} [options.namespace]` | (optional) a search param to append |
| `{string} [options.timeout]` | (optional) a search param to append |

## `Timestamp` {id="_timestamp"}

A component to render timestamp. The timestamps are synchronized between individual instances of the Timestamp component. The provided timestamp is formatted according to user locale.

|     |     |
| --- | --- |
| Parameter Name | Description |
| `timestamp` | the timestamp to render. Format is expected to be ISO 8601 (used by Kubernetes), epoch timestamp, or an instance of a Date. |
| `simple` | render simple version of the component omitting icon and tooltip. |
| `omitSuffix` | formats the date omitting the suffix. |
| `className` | additional class name for the component. |

## `useOverlay` {id="_useoverlay"}

The `useOverlay` hook inserts a component directly to the DOM outside the web console’s page structure. This allows the component to be freely styled and positioning with CSS. For example, to float the overlay in the top right corner of the UI: `style={{ position: 'absolute', right: '2rem', top: '2rem', zIndex: 999 }}`. It is possible to add multiple overlays by calling `useOverlay` multiple times. A `closeOverlay` function is passed to the overlay component. Calling it removes the component from the DOM without affecting any other overlays that might have been added with `useOverlay`. Additional props can be passed to `useOverlay` and they will be passed through to the overlay component.

```tsx title="Example"
const OverlayComponent = ({ closeOverlay, heading }) => {
  return (
    <div style={{ position: 'absolute', right: '2rem', top: '2rem', zIndex: 999 }}>
      <h2>{heading}</h2>
      <Button onClick={closeOverlay}>Close</Button>
    </div>
  );
};

const ModalComponent = ({ body, closeOverlay, title }) => (
  <Modal isOpen onClose={closeOverlay}>
    <ModalHeader title={title} />
    <ModalBody>{body}</ModalBody>
  </Modal>
);

const AppPage: React.FC = () => {
  const launchOverlay = useOverlay();
  const onClickOverlay = () => {
    launchOverlay(OverlayComponent, { heading: 'Test overlay' });
  };
  const onClickModal = () => {
    launchOverlay(ModalComponent, { body: 'Test modal', title: 'Overlay modal' });
  };
  return (
    <Button onClick={onClickOverlay}>Launch an Overlay</Button>
    <Button onClick={onClickModal}>Launch a Modal</Button>
  )
}
```

## `ActionServiceProvider` {id="_actionserviceprovider"}

Component that allows to receive contributions from other plugins for the `console.action/provider` extension type.

```text title="Example"
   const context: ActionContext = { 'a-context-id': { dataFromDynamicPlugin } };

   ...

   <ActionServiceProvider context={context}>
       {({ actions, options, loaded }) =>
         loaded && (
           <ActionMenu actions={actions} options={options} variant={ActionMenuVariant.DROPDOWN} />
         )
       }
   </ActionServiceProvider>
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `context` | Object with contextId and optional plugin data |

## `NamespaceBar` {id="_namespacebar"}

A component that renders a horizontal toolbar with a namespace dropdown menu in the leftmost position. Additional components can be passed in as children and is rendered to the right of the namespace dropdown. This component is designed to be used at the top of the page. It should be used on pages where the user needs to be able to change the active namespace, such as on pages with k8s resources.

```text title="Example"
   const logNamespaceChange = (namespace) => console.log(`New namespace: ${namespace}`);

   ...

   <NamespaceBar onNamespaceChange={logNamespaceChange}>
     <NamespaceBarApplicationSelector />
   </NamespaceBar>
   <Page>

     ...
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `onNamespaceChange` | (optional) A function that is executed when a namespace option is selected. It accepts the new namespace in the form of a string as its only argument. The active namespace is updated automatically when an option is selected, but additional logic can be applied via this function. When the namespace is changed, the namespace parameter in the URL is changed from the previous namespace to the newly selected namespace. |
| `isDisabled` | (optional) A boolean flag that disables the namespace dropdown if set to true. This option only applies to the namespace dropdown and has no effect on child components. |
| `children` | (optional) Additional elements to be rendered inside the toolbar to the right of the namespace dropdown. |

## `ErrorBoundaryFallbackPage` {id="_errorboundaryfallbackpage"}

Creates full page ErrorBoundaryFallbackPage component to display the "Oh no! Something went wrong." message along with the stack trace and other helpful debugging information. This is to be used inconjunction with an component.

```tsx title="Example"
//in ErrorBoundary component
 return (
   if (this.state.hasError) {
     return <ErrorBoundaryFallbackPage errorMessage={errorString} componentStack={componentStackString}
      stack={stackTraceString} title={errorString}/>;
   }

   return this.props.children;
)
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `errorMessage` | text description of the error message |
| `componentStack` | component trace of the exception |
| `stack` | stack trace of the exception |
| `title` | title to render as the header of the error boundary page |

## `QueryBrowser` {id="_querybrowser"}

A component that renders a graph of the results from a Prometheus PromQL query along with controls for interacting with the graph.

```tsx title="Example"
<QueryBrowser
  defaultTimespan={15 * 60 * 1000}
  namespace={namespace}
  pollInterval={30 * 1000}
  queries={[
    'process_resident_memory_bytes{job="console"}',
    'sum(irate(container_network_receive_bytes_total[6h:5m])) by (pod)',
  ]}
/>
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `customDataSource` | (optional) Base URL of an API endpoint that handles PromQL queries. If provided, this is used instead of the default API for fetching data. |
| `defaultSamples` | (optional) The default number of data samples plotted for each data series. If there are many data series, QueryBrowser might automatically pick a lower number of data samples than specified here. |
| `defaultTimespan` | (optional) The default timespan for the graph in milliseconds - defaults to 1,800,000 (30 minutes). |
| `disabledSeries` | (optional) Disable (do not display) data series with these exact label / value pairs. |
| `disableZoom` | (optional) Flag to disable the graph zoom controls. |
| `filterLabels` | (optional) Optionally filter the returned data series to only those that match these label / value pairs. |
| `fixedEndTime` | (optional) Set the end time for the displayed time range rather than showing data up to the current time. |
| `formatSeriesTitle` | (optional) Function that returns a string to use as the title for a single data series. |
| `GraphLink` | (optional) Component for rendering a link to another page (for example getting more information about this query). |
| `hideControls` | (optional) Flag to hide the graph controls for changing the graph timespan, and so on. |
| `isStack` | (optional) Flag to display a stacked graph instead of a line graph. If showStackedControl is set, it is still possible for the user to switch to a line graph. |
| `namespace` | (optional) If provided, data is only returned for this namespace (only series that have this namespace label). |
| `onZoom` | (optional) Callback called when the graph is zoomed. |
| `pollInterval` | (optional) If set, determines how often the graph is updated to show the latest data (in milliseconds). |
| `queries` | Array of PromQL queries to run and display the results in the graph. |
| `showLegend` | (optional) Flag to enable displaying a legend below the graph. |
| `showStackedControl` | Flag to enable displaying a graph control for switching between stacked graph mode and line graph mode. |
| `timespan` | (optional) The timespan that should be covered by the graph in milliseconds. |
| `units` | (optional) Units to display on the Y-axis and in the tooltip. |

## `useAnnotationsModal` {id="_useannotationsmodal"}

A hook that provides a callback to launch a modal for editing Kubernetes resource annotations.

```tsx title="Example"
const PodAnnotationsButton = ({ pod }) => {
  const { t } = useTranslation();
  const launchAnnotationsModal = useAnnotationsModal<PodKind>(pod);
  return <button onClick={launchAnnotationsModal}>{t('Edit Pod Annotations')}</button>
}
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `resource` | The resource to edit annotations for an object of K8sResourceCommon type. |

**Returns**
A function which launches a modal for editing a resource’s annotations.

## `useDeleteModal` {id="_usedeletemodal"}

A hook that provides a callback to launch a modal for deleting a resource.

```tsx title="Example"
const DeletePodButton = ({ pod }) => {
  const { t } = useTranslation();
  const launchDeleteModal = useDeleteModal<PodKind>(pod);
  return <button onClick={launchDeleteModal}>{t('Delete Pod')}</button>
}
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `resource` | The resource to delete. |
| `redirectTo` | (optional) A location to redirect to after deleting the resource. |
| `message` | 	(optional) A message to display in the modal. |
| `btnText` | 	(optional) The text to display on the delete button. |
| `deleteAllResources` | (optional) A function to delete all resources of the same kind. |

**Returns**
A function which launches a modal for deleting a resource.

## `useLabelsModel` {id="_uselabelsmodel"}

A hook that provides a callback to launch a modal for editing Kubernetes resource labels.

```tsx title="Example"
const PodLabelsButton = ({ pod }) => {
  const { t } = useTranslation();
  const launchLabelsModal = useLabelsModal<PodKind>(pod);
  return <button onClick={launchLabelsModal}>{t('Edit Pod Labels')}</button>
}
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `resource` | The resource to edit labels for, an object of K8sResourceCommon type. |

**Returns**
A function which launches a modal for editing a resource’s labels.

## `useActiveNamespace` {id="_useactivenamespace"}

Hook that provides the currently active namespace and a callback for setting the active namespace.

```tsx title="Example"
const Component: React.FC = (props) => {
   const [activeNamespace, setActiveNamespace] = useActiveNamespace();
   return <select
     value={activeNamespace}
     onChange={(e) => setActiveNamespace(e.target.value)}
   >
     {
       // ...namespace options
     }
   </select>
}
```

**Returns**
A tuple containing the current active namespace and setter callback.

## `useUserSettings` {id="_useusersettings"}

Hook that provides a user setting value and a callback for setting the user setting value.

```tsx title="Example"
const Component: React.FC = (props) => {
   const [state, setState, loaded] = useUserSettings(
     'devconsole.addPage.showDetails',
     true,
     true,
   );
   return loaded ? (
      <WrappedComponent {...props} userSettingState={state} setUserSettingState={setState} />
    ) : null;
};
```

**Returns**
A tuple containing the user setting value, a setter callback, and a loaded boolean.

## `useQuickStartContext` {id="_usequickstartcontext"}

Hook that provides the current quick start context values. This allows plugins to interoperate with console quick start functionality.

```tsx title="Example"
const OpenQuickStartButton = ({ quickStartId }) => {
   const { setActiveQuickStart } = useQuickStartContext();
   const onClick = React.useCallback(() => {
       setActiveQuickStart(quickStartId);
   }, [quickStartId]);
   return <button onClick={onClick}>{t('Open Quick Start')}</button>
};
```

**Returns**
Quick start context values object.

## `PerspectiveContext` {id="_perspectivecontext"}

Deprecated: Use the provided `usePerspectiveContext` instead. Creates the perspective context.

|     |     |
| --- | --- |
| Parameter Name | Description |
| `PerspectiveContextType` | object with active perspective and setter |

## `useAccessReviewAllowed` {id="_useaccessreviewallowed"}

Deprecated: Use `useAccessReview` from `@console/dynamic-plugin-sdk` instead. Hook that provides allowed status about user access to a given resource. It returns the `isAllowed` boolean value.

|     |     |
| --- | --- |
| Parameter Name | Description |
| `resourceAttributes` | resource attributes for access review |
| `impersonate` | impersonation details |

## `useSafetyFirst` {id="_usesafetyfirst"}

Deprecated: This hook is not related to console functionality. Hook that ensures a safe asynchronous setting of React state in case a given component could be unmounted. It returns an array with a pair of state value and its set function.

|     |     |
| --- | --- |
| Parameter Name | Description |
| `initialState` | initial state value |

{%- set power_bi_url = "" %}

## `VirtualizedTable` {id="_virtualizedtable"}

Deprecated: Use PatternFly’s [Data view](https://www.patternfly.org/extensions/data-view/overview/) instead. A component for making virtualized tables.

```text title="Example"
const MachineList: React.FC<MachineListProps> = (props) => {
  return (
    <VirtualizedTable<MachineKind>
     {...props}
     aria-label='Machines'
     columns={getMachineColumns}
     Row={getMachineTableRow}
    />
  );
}
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `data` | data for table |
| `loaded` | flag indicating data is loaded |
| `loadError` | error object if issue loading data |
| `columns` | column setup |
| `Row` | row setup |
| `unfilteredData` | original data without filter |
| `NoDataEmptyMsg` | (optional) no data empty message component |
| `EmptyMsg` | (optional) empty message component |
| `scrollNode` | (optional) function to handle scroll |
| `label` | (optional) label for table |
| `ariaLabel` | (optional) aria label |
| `gridBreakPoint` | sizing of how to break up grid for responsiveness |
| `onSelect` | (optional) function for handling select of table |
| `rowData` | (optional) data specific to row |

## `ListPageFilter` {id="_listpagefilter"}

Deprecated: Use PatternFly’s [Data view](https://www.patternfly.org/extensions/data-view/overview/) instead. Component that generates filter for list page.

```tsx title="Example"
  // See implementation for more details on RowFilter and FilterValue types
  const [staticData, filteredData, onFilterChange] = useListPageFilter(
    data,
    rowFilters,
    staticFilters,
  );
  // ListPageFilter updates filter state based on user interaction and resulting filtered data can be rendered in an independent component.
  return (
    <>
      <ListPageHeader .../>
      <ListPagBody>
        <ListPageFilter data={staticData} onFilterChange={onFilterChange} />
        <List data={filteredData} />
      </ListPageBody>
    </>
  )
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `data` | An array of data points |
| `loaded` | indicates that data has loaded |
| `onFilterChange` | callback function for when filter is updated |
| `rowFilters` | (optional) An array of RowFilter elements that define the available filter options |
| `nameFilterPlaceholder` | (optional) placeholder for name filter |
| `labelFilterPlaceholder` | (optional) placeholder for label filter |
| `hideLabelFilter` | (optional) only shows the name filter instead of both name and label filter |
| `hideNameLabelFilter` | (optional) hides both name and label filter |
| `columnLayout` | (optional) column layout object |
| `hideColumnManagement` | (optional) flag to hide the column management |

## `useListPageFilter` {id="_uselistpagefilter"}

Deprecated: Use PatternFly’s [Data view](https://www.patternfly.org/extensions/data-view/overview/) instead. A hook that manages filter state for the ListPageFilter component. It returns a tuple containing the data filtered by all static filters, the data filtered by all static and row filters, and a callback that updates rowFilters.

```tsx title="Example"
  // See implementation for more details on RowFilter and FilterValue types
  const [staticData, filteredData, onFilterChange] = useListPageFilter(
    data,
    rowFilters,
    staticFilters,
  );
  // ListPageFilter updates filter state based on user interaction and resulting filtered data can be rendered in an independent component.
  return (
    <>
      <ListPageHeader .../>
      <ListPagBody>
        <ListPageFilter data={staticData} onFilterChange={onFilterChange} />
        <List data={filteredData} />
      </ListPageBody>
    </>
  )
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `data` | An array of data points |
| `rowFilters` | (optional) An array of RowFilter elements that define the available filter options |
| `staticFilters` | (optional) An array of FilterValue elements that are statically applied to the data |

## `YAMLEditor` {id="_yamleditor"}

Deprecated: Use `CodeEditor` instead. A basic lazy loaded YAML editor with hover help and completion.

```text title="Example"
<React.Suspense fallback={<LoadingBox />}>
  <YAMLEditor
    value={code}
  />
</React.Suspense>
```

|     |     |
| --- | --- |
| Parameter Name | Description |
| `value` | String representing the yaml code to render. |
| `options` | Monaco editor options. |
| `minHeight` | Minimum editor height in valid CSS height values. |
| `showShortcuts` | Boolean to show shortcuts on top of the editor. |
| `toolbarLinks` | Array of ReactNode rendered on the toolbar links section on top of the editor. |
| `onChange` | Callback for on code change event. |
| `onSave` | Callback called when the command CTRL / CMD + S is triggered. |
| `ref` | React reference to `{ editor?: IStandaloneCodeEditor }`. Using the `editor` property, you are able to access to all methods to control the editor. |

## `useModal` {id="_usemodal"}

Deprecated: Use `useOverlay` from `@console/dynamic-plugin-sdk` instead. A hook to launch Modals.

```tsx title="Example"
const AppPage: React.FC = () => {
 const launchModal = useModal();
 const onClick = () => launchModal(ModalComponent);
 return (
   <Button onClick={onClick}>Launch a Modal</Button>
 )
}
```