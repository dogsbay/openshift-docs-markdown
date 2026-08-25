{%- set _mod_docs_content_type = "REFERENCE" %}
# Describing serverless applications by using the Knative CLI {id="kn-service-describe_{{ context }}"}

You can describe a Knative service by using the `kn service describe` command.

**Example commands**

*   Describe a service:
    ```terminal
    $ kn service describe --verbose <service_name>
    ```

    The `--verbose` flag is optional but can be included to provide a more detailed description. The difference between a regular and verbose output is shown in the following examples:
    ```terminal title="Example output without --verbose flag"
    Name:       hello
    Namespace:  default
    Age:        2m
    URL:        http://hello-default.apps.ocp.example.com

    Revisions:
      100%  @latest (hello-00001) [1] (2m)
            Image:  docker.io/openshift/hello-openshift (pinned to aaea76)

    Conditions:
      OK TYPE                   AGE REASON
      ++ Ready                   1m
      ++ ConfigurationsReady     1m
      ++ RoutesReady             1m
    ```
    ```terminal title="Example output with --verbose flag"
    Name:         hello
    Namespace:    default
    Annotations:  serving.knative.dev/creator=system:admin
                  serving.knative.dev/lastModifier=system:admin
    Age:          3m
    URL:          http://hello-default.apps.ocp.example.com
    Cluster:      http://hello.default.svc.cluster.local

    Revisions:
      100%  @latest (hello-00001) [1] (3m)
            Image:  docker.io/openshift/hello-openshift (pinned to aaea76)
            Env:    RESPONSE=Hello Serverless!

    Conditions:
      OK TYPE                   AGE REASON
      ++ Ready                   3m
      ++ ConfigurationsReady     3m
      ++ RoutesReady             3m
    ```
*   Describe a service in YAML format:
    ```terminal
    $ kn service describe <service_name> -o yaml
    ```
*   Describe a service in JSON format:
    ```terminal
    $ kn service describe <service_name> -o json
    ```
*   Print the service URL only:
    ```terminal
    $ kn service describe <service_name> -o url
    ```