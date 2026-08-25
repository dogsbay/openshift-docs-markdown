{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding a tab to the pods page {id="adding-tab-to-pods-page_{{ context }}"}

There are different customizations you can make to the {{ product_title }} web console. The following procedure adds a tab to the **Pod details** page as an example extension to your plugin. {._abstract}


:::note

The {{ product_title }} web console runs in a container connected to the cluster you have logged into. See "Dynamic plugin development" for information to test the plugin before creating your own.

:::


**Procedure**

1.  Visit the [`console-plugin-template`](https://github.com/openshift/console-plugin-template) repository containing a template for creating plugins in a new tab.

    :::important

    Custom plugin code is not supported by Red Hat. Only [Cooperative community support](https://access.redhat.com/solutions/5893251) is available for your plugin.
    
    :::

1.  Create a GitHub repository for the template by clicking **Use this template** -> **_Create new repository_**.
1.  Rename the new repository with the name of your plugin.
1.  Clone the new repository to your local machine so you can edit the code.
1.  Edit the `package.json` file, adding your plugin’s metadata to the `consolePlugin` declaration. For example:

```json
"consolePlugin": {
  "name": "my-plugin",
  "version": "0.0.1",
  "displayName": "My Plugin",
  "description": "Enjoy this shiny, new console plugin!",
  "exposedModules": {
    "ExamplePage": "./components/ExamplePage"
  },
  "dependencies": {
    "@console/pluginAPI": "/*"
  }
}
```

where:


`consolePlugin.name.my-plugin`
:   Update the name of your plugin.

`consolePlugin.version.0.0.1`
:   Update the version.

`consolePlugin.displayName.My Plugin`
:   Update the display name for your plugin.

`consolePlugin.description.Enjoy this shiny, new console plugin!`
:   Update the description with a synopsis about your plugin.

1.  Add the following to the `console-extensions.json` file:

```json
{
  "type": "console.tab/horizontalNav",
  "properties": {
    "page": {
      "name": "Example Tab",
      "href": "example"
    },
    "model": {
      "group": "core",
      "version": "v1",
      "kind": "Pod"
    },
    "component": { "$codeRef": "ExampleTab" }
  }
}
```

1.  Edit the `package.json` file to include the following changes:

```json
        "exposedModules": {
            "ExamplePage": "./components/ExamplePage",
            "ExampleTab": "./components/ExampleTab"
        }
```

1.  Write a message to display on a new custom tab on the **Pods** page by creating a new file `src/components/ExampleTab.tsx` and adding the following script:

```tsx
import * as React from 'react';

export default function ExampleTab() {
    return (
        <p>This is a custom tab added to a resource using a dynamic plugin.</p>
    );
}
```

1.  Install a Helm chart with the name of the plugin as the Helm release name into a new namespace or an existing namespace as specified by the `-n` command-line option to deploy your plugin on a cluster. Provide the location of the image within the `plugin.image` parameter by using the following command:

    ```terminal
    $ helm upgrade -i  my-plugin charts/openshift-console-plugin -n my-plugin-namespace --create-namespace --set plugin.image=my-plugin-image-location
    ```

    :::note

    For more information on deploying your plugin on a cluster, see "Deploy your plugin on a cluster".
    
    :::


**Verification**

*   Visit a **Pod** page to view the added tab.