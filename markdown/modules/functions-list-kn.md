{%- set _mod_docs_content_type = "PROCEDURE" %}
# Listing existing functions {id="functions-list-kn_{{ context }}"}

You can list existing functions by using `kn func list`. If you want to list functions that have been deployed as Knative services, you can also use `kn service list`.

**Procedure**

*   List existing functions:
    ```terminal
    $ kn func list [-n <namespace> -p <path>]
    ```
    ```terminal title="Example output"
    NAME           NAMESPACE  RUNTIME  URL                                                                                      READY
    example-function  default    node     http://example-function.default.apps.ci-ln-g9f36hb-d5d6b.origin-ci-int-aws.dev.rhcloud.com  True
    ```
*   List functions deployed as Knative services:
    ```terminal
    $ kn service list -n <namespace>
    ```
    ```terminal title="Example output"
    NAME            URL                                                                                       LATEST                AGE   CONDITIONS   READY   REASON
    example-function   http://example-function.default.apps.ci-ln-g9f36hb-d5d6b.origin-ci-int-aws.dev.rhcloud.com   example-function-gzl4c   16m   3 OK / 3     True
    ```