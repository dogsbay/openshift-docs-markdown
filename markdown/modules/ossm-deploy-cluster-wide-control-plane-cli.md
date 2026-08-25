{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the control plane for cluster-wide deployment with the CLI {id="ossm-deploy-cluster-wide-control-plane-cli_{{ context }}"}

You can configure the `ServiceMeshControlPlane` resource for cluster-wide deployment using the CLI. In this example, `istio-system` is the name of the Service Mesh control plane namespace.

**Prerequisites**

*   The {{ SMProductName }} Operator is installed.
*   You have access to the OpenShift CLI (`oc`).
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   You are logged in to {{ product_title }} as`cluster-admin`.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
*   You are logged in to {{ product_title }} as a user with the `dedicated-admin` role.
{% endif %}

**Procedure**

1.  Create a project named `istio-system`.
    ```terminal
    $ oc new-project istio-system
    ```
1.  Create a `ServiceMeshControlPlane` file named `istio-installation.yaml` using the following example:
    {%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
    ```yaml title="Example version {{ MaistraVersion }} istio-installation.yaml"
    apiVersion: maistra.io/v2
    kind: ServiceMeshControlPlane
    metadata:
      name: basic
      namespace: istio-system
    spec:
      version: v{{ MaistraVersion }}
      mode: ClusterWide
    ```
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
    ```yaml title="Example ServiceMeshControlPlane resource"
    apiVersion: maistra.io/v2
    kind: ServiceMeshControlPlane
    metadata:
      name: basic
      namespace: istio-system
    spec:
      version: v{{ MaistraVersion }}
      mode: ClusterWide (1)
      security:
        identity:
          type: ThirdParty (2)
    ```
    1.  Specifies that the resource is for a cluster-wide deployment.
        {%- if openshift_rosa or openshift_rosa_hcp %}
    1.  Specifies a required setting for {{ product_rosa }}. 
        {% endif %}
        {% if openshift_dedicated %}
    1.  Specifies a required setting for {{ product_dedicated }}. 
{% endif %}
{% endif %}
1.  Run the following command to deploy the {{ SMProductShortName }} control plane:
    ```terminal
    $ oc create -n istio-system -f <istio_installation.yaml>
    ```

    where:

    &lt;istio_installation.yaml>
    :   Specifies the full path to your file.

**Verification**

1.  To monitor the progress of the pod deployment, run the following command:
    ```terminal
    $ oc get pods -n istio-system -w
    ```

    You should see output similar to the following example:
    ```terminal title="Example output"
    NAME                                   READY   STATUS    RESTARTS   AGE
    grafana-b4d59bd7-mrgbr                 2/2     Running   0          65m
    istio-egressgateway-678dc97b4c-wrjkp   1/1     Running   0          108s
    istio-ingressgateway-b45c9d54d-4qg6n   1/1     Running   0          108s
    istiod-basic-55d78bbbcd-j5556          1/1     Running   0          108s
    jaeger-67c75bd6dc-jv6k6                2/2     Running   0          65m
    kiali-6476c7656c-x5msp                 1/1     Running   0          43m
    prometheus-58954b8d6b-m5std            2/2     Running   0          66m
    ```