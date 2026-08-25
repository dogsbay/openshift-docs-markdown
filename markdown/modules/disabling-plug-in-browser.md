{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling your plugin in the browser {id="disabling-your-plugin-browser_{{ context }}"}

Console users can use the `disable-plugins` query parameter to disable specific or all dynamic plugins that would normally get loaded at run-time. {._abstract}

**Procedure**

*   To disable a specific plugin(s), remove the plugin you want to disable from the comma-separated list of plugin names.
*   To disable all plugins, leave an empty string in the `disable-plugins` query parameter.

    :::note

    Cluster administrators can disable plugins in the **Cluster Settings** page of the web console.
    
    :::