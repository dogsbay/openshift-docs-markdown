{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting triggers manually {id="builds-setting-triggers-manually_{{ context }}"}

Triggers can be added to and removed from build configurations with `oc set triggers`.

**Procedure**

*   To set a GitHub webhook trigger on a build configuration, enter the following command:
    ```terminal
    $ oc set triggers bc <name> --from-github
    ```
*   To set an image change trigger, enter the following command:
    ```terminal
    $ oc set triggers bc <name> --from-image='<image>'
    ```
*   To remove a trigger, enter the following command:
    ```terminal
    $ oc set triggers bc <name> --from-bitbucket --remove
    ```


:::note

When a webhook trigger already exists, adding it again regenerates the webhook secret.

:::


For more information, consult the help documentation by entering the following command:

```terminal
$ oc set triggers --help
```