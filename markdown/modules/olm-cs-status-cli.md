{% if openshift_origin %}
{%- set global_ns = "olm" -%}
{% endif %}
{% if not openshift_origin %}
{%- set global_ns = "openshift-marketplace" -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing Operator catalog source status by using the CLI {id="olm-cs-status-cli_{{ context }}"}

You can view the status of an Operator catalog source by using the CLI. {._abstract}

**Prerequisites**

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   You have access to the cluster as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{%- endif %}
*   You have installed the OpenShift CLI (`oc`).

**Procedure**

1.  List the catalog sources in a namespace. For example, you can check the `{{ global_ns }}` namespace, which is used for cluster-wide catalog sources:
    ```terminal
    $ oc get catalogsources -n {{ global_ns }}
    ```
    ```terminal title="Example output"
    NAME                  DISPLAY               TYPE   PUBLISHER   AGE
    certified-operators   Certified Operators   grpc   Red Hat     55m
    community-operators   Community Operators   grpc   Red Hat     55m
    example-catalog       Example Catalog       grpc   Example Org 2m25s
    redhat-operators      Red Hat Operators     grpc   Red Hat     55m
    ```
1.  Use the `oc describe` command to get more details and status about a catalog source:
    ```terminal
    $ oc describe catalogsource example-catalog -n {{ global_ns }}
    ```
    ```terminal title="Example output"
    Name:         example-catalog
    Namespace:    {{ global_ns }}
    Labels:       <none>
    Annotations:  operatorframework.io/managed-by: marketplace-operator
                  target.workload.openshift.io/management: {"effect": "PreferredDuringScheduling"}
    API Version:  operators.coreos.com/v1alpha1
    Kind:         CatalogSource
    # ...
    Status:
      Connection State:
        Address:              example-catalog.{{ global_ns }}.svc:50051
        Last Connect:         2021-09-09T17:07:35Z
        Last Observed State:  TRANSIENT_FAILURE
      Registry Service:
        Created At:         2021-09-09T17:05:45Z
        Port:               50051
        Protocol:           grpc
        Service Name:       example-catalog
        Service Namespace:  {{ global_ns }}
    # ...
    ```

    In the preceding example output, the last observed state is `TRANSIENT_FAILURE`. This state indicates that there is a problem establishing a connection for the catalog source.
1.  List the pods in the namespace where your catalog source was created:
    ```terminal
    $ oc get pods -n {{ global_ns }}
    ```
    ```terminal title="Example output"
    NAME                                    READY   STATUS             RESTARTS   AGE
    certified-operators-cv9nn               1/1     Running            0          36m
    community-operators-6v8lp               1/1     Running            0          36m
    marketplace-operator-86bfc75f9b-jkgbc   1/1     Running            0          42m
    example-catalog-bwt8z                   0/1     ImagePullBackOff   0          3m55s
    redhat-operators-smxx8                  1/1     Running            0          36m
    ```

    When a catalog source is created in a namespace, a pod for the catalog source is created in that namespace. In the preceding example output, the status for the `example-catalog-bwt8z` pod is `ImagePullBackOff`. This status indicates that there is an issue pulling the catalog source’s index image.
1.  Use the `oc describe` command to inspect a pod for more detailed information:
    ```terminal
    $ oc describe pod example-catalog-bwt8z -n {{ global_ns }}
    ```
    ```terminal title="Example output"
    Name:         example-catalog-bwt8z
    Namespace:    {{ global_ns }}
    Priority:     0
    Node:         ci-ln-jyryyg2-f76d1-ggdbq-worker-b-vsxjd/10.0.128.2
    ...
    Events:
      Type     Reason          Age                From               Message
      ----     ------          ----               ----               -------
      Normal   Scheduled       48s                default-scheduler  Successfully assigned {{ global_ns }}/example-catalog-bwt8z to ci-ln-jyryyf2-f76d1-fgdbq-worker-b-vsxjd
      Normal   AddedInterface  47s                multus             Add eth0 [10.131.0.40/23] from openshift-sdn
      Normal   BackOff         20s (x2 over 46s)  kubelet            Back-off pulling image "quay.io/example-org/example-catalog:v1"
      Warning  Failed          20s (x2 over 46s)  kubelet            Error: ImagePullBackOff
      Normal   Pulling         8s (x3 over 47s)   kubelet            Pulling image "quay.io/example-org/example-catalog:v1"
      Warning  Failed          8s (x3 over 47s)   kubelet            Failed to pull image "quay.io/example-org/example-catalog:v1": rpc error: code = Unknown desc = reading manifest v1 in quay.io/example-org/example-catalog: unauthorized: access to the requested resource is not authorized
      Warning  Failed          8s (x3 over 47s)   kubelet            Error: ErrImagePull
    ```

    In the preceding example output, the error messages indicate that the catalog source’s index image is failing to pull successfully because of an authorization issue. For example, the index image might be stored in a registry that requires login credentials.

{% if openshift_origin %}
{%- set global_ns = false -%}
{% endif %}
{% if not openshift_origin %}
{%- set global_ns = false -%}
{% endif %}