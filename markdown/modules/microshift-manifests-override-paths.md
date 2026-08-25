{%- set _mod_docs_content_type = "PROCEDURE" %}
# Override the list of manifest paths {id="microshift-manifests-override-paths_{{ context }}"}

You can override the list of default manifest paths by using a new single path, or by using a new glob pattern for multiple files. {._abstract}

Use the following procedure to customize your manifest paths.

**Procedure**

1.  Override the list of default paths by inserting your own values and running one of the following commands:
    1.  Set `manifests.kustomizePaths` to `<++"++/opt/alternate/path++"++>` in the configuration file for a single path.
    1.  Set `kustomizePaths` to `,++"++/opt/alternative/path.d/++*"++.` in the configuration file for a glob pattern.
        ```terminal
        manifests:
            kustomizePaths:
                - _<location>_
        ```

        Replace `_<location>_` with the path to the manifest directory. Set each location entry to an exact path by using `+"++/opt/alternate/path++"+` or a glob pattern by using `+"++/opt/alternative/path.d/++*"+`.
1.  To disable loading manifests, set the configuration option to an empty list.
    ```terminal
    manifests:
        kustomizePaths: []
    ```

    :::note

    The configuration file overrides the defaults entirely. If the `kustomizePaths` value is set, only the values in the configuration file are used. Setting the value to an empty list disables manifest loading.
    
    :::