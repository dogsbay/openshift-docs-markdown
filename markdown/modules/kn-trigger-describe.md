{%- set _mod_docs_content_type = "PROCEDURE" %}
# Describing a trigger by using the Knative CLI {id="kn-trigger-describe_{{ context }}"}

You can use the `kn trigger describe` command to print information about existing triggers in your cluster by using the Knative CLI.

**Prerequisites**

*   The {{ ServerlessOperatorName }} and Knative Eventing are installed on your {{ product_title }} cluster.
*   You have installed the Knative (`kn`) CLI.
*   You have created a trigger.

**Procedure**

*   Enter the command:
    ```terminal
    $ kn trigger describe <trigger_name>
    ```
    ```terminal title="Example output"
    Name:         ping
    Namespace:    default
    Labels:       eventing.knative.dev/broker=default
    Annotations:  eventing.knative.dev/creator=kube:admin, eventing.knative.dev/lastModifier=kube:admin
    Age:          2m
    Broker:       default
    Filter:
      type:       dev.knative.event

    Sink:
      Name:       edisplay
      Namespace:  default
      Resource:   Service (serving.knative.dev/v1)

    Conditions:
      OK TYPE                  AGE REASON
      ++ Ready                  2m
      ++ BrokerReady            2m
      ++ DependencyReady        2m
      ++ Subscribed             2m
      ++ SubscriberResolved     2m
    ```