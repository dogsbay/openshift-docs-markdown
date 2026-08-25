{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing Operator subscription status by using the CLI {id="olm-status-viewing-cli_{{ context }}"}

You can view Operator subscription status by using the CLI. {._abstract}

**Prerequisites**

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   You have access to the cluster as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{%- endif %}
*   You have installed the OpenShift CLI (`oc`).

**Procedure**

1.  List Operator subscriptions:
    ```terminal
    $ oc get subs -n <operator_namespace>
    ```
1.  Use the `oc describe` command to inspect a `Subscription` resource:
    ```terminal
    $ oc describe sub <subscription_name> -n <operator_namespace>
    ```
1.  In the command output, find the `Conditions` section for the status of Operator subscription condition types. In the following example, the `CatalogSourcesUnhealthy` condition type has a status of `false` because all available catalog sources are healthy:
    ```terminal title="Example output"
    Name:         cluster-logging
    Namespace:    openshift-logging
    Labels:       operators.coreos.com/cluster-logging.openshift-logging=
    Annotations:  <none>
    API Version:  operators.coreos.com/v1alpha1
    Kind:         Subscription
    # ...
    Conditions:
       Last Transition Time:  2019-07-29T13:42:57Z
       Message:               all available catalogsources are healthy
       Reason:                AllCatalogSourcesHealthy
       Status:                False
       Type:                  CatalogSourcesUnhealthy
    # ...
    ```

    :::note

    Default {{ product_title }} cluster Operators are managed by the Cluster Version Operator (CVO) and they do not have a `Subscription` object. Application Operators are managed by Operator Lifecycle Manager (OLM) and they have a `Subscription` object.
    
    :::