{%- set _mod_docs_content_type = "PROCEDURE" %}
# Translating messages with react-i18next {id="dynamic-plugin-api_{{ context }}"}

The [plugin template](https://github.com/openshift/console-plugin-template) demonstrates how you can translate messages with [react-i18next](https://www.i18next.com/). {._abstract}

**Prerequisites**

*   You must have the plugin template cloned locally.
*   Optional: To test your plugin locally, run the 
{{ product_title }} web console in a container. You can use either Docker or Podman 3.2.0 or later.

**Procedure**

1.  Prefix the name with `plugin\__` to avoid any naming conflicts. The plugin template uses the `plugin__console-plugin-template` namespace by default, and you must update when you rename your plugin for example, `plugin__my-plugin`.  You can use the `useTranslation` hook, for example:
    ```tsx
    conster Header: React.FC = () => {
      const { t } = useTranslation('plugin__console-demo-plugin');
      return <h1>{t('Hello, World!')}</h1>;
    };
    ```

    :::important

    You must match the `i18n` namespace with the name of the `ConsolePlugin` resource.
    
    :::

1.  Set the `spec.i18n.loadType` field based on needed behavior.

    `plugin__console-demo-plugin` **Example**
    ```yaml
    spec:
      backend:
        service:
          basePath: /
          name: console-demo-plugin
          namespace: console-demo-plugin
          port: 9001
        type: Service
      displayName: OpenShift Console Demo Plugin
      i18n:
        loadType: Preload
    ```

    `loadType: Preload`
    :   Loads all the plugin’s localization resources from the `i18n` namespace after the dynamic plugin during loading.
1.  Use the format `+%plugin__console-plugin-template~My Label%+` for labels in `console-extensions.json`. The console replaces the value with the message for the current language from the `plugin__console-plugin-template` namespace. For example:
    ```json
      {
        "type": "console.navigation/section",
        "properties": {
          "id": "admin-demo-section",
          "perspective": "admin",
          "name": "%plugin__console-plugin-template~Plugin Template%"
        }
      }
    ```
1.  Include a comment in a TypeScript file for [i18next-parser](https://github.com/i18next/i18next-parser) to add the message from `console-extensions.json` to your message catalog. For example:
    ```tsx
    // t('plugin__console-demo-plugin~Demo Plugin')
    ```
1.  To update the JSON files in the `locales` folder of the plugin template when adding or changing a message, run the following command:
    ```terminal
    $ yarn i18n
    ```