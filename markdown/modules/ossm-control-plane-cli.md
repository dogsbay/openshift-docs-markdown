{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying the {{ SMProductShortName }} control plane using the CLI {id="ossm-control-plane-deploy-cli_{{ context }}"}

You can deploy a basic `ServiceMeshControlPlane` from the command line.

**Prerequisites**

*   The {{ SMProductName }} Operator must be installed.
*   Access to the OpenShift CLI (`oc`).
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   You are logged in to {{ product_title }} as`cluster-admin`.
{%- endif %}
{%- if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
*   You are logged in to {{ product_title }} as a user with the `dedicated-admin` role.
{%- endif %}

**Procedure**

1.  Create a project named `istio-system`.
    ```terminal
    $ oc new-project istio-system
    ```
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}

    The `ServiceMeshControlPlane` resource must be installed in the `istio-system` project, separate from your microservices and Operators.
{% endif %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
1.  Create a `ServiceMeshControlPlane` file named `istio-installation.yaml` using the following example. The version of the {{ SMProductShortName }} control plane determines the features available regardless of the version of the Operator.
    ```yaml title="Example version {{ MaistraVersion }} istio-installation.yaml" {minja}
    apiVersion: maistra.io/v2
    kind: ServiceMeshControlPlane
    metadata:
      name: basic
      namespace: istio-system
    spec:
      version: v{{ MaistraVersion }}
      tracing:
        type: None
        sampling: 10000
      addons:
        kiali:
          enabled: true
          name: kiali
        grafana:
          enabled: true
    ```
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
1.  Create a `ServiceMeshControlPlane` file named `istio-installation.yaml` using the following example. The version of the {{ SMProductShortName }} control plane determines the features available regardless of the version of the Operator.
    ```yaml title="Example ServiceMeshControlPlane resource" {minja}
    apiVersion: maistra.io/v2
    kind: ServiceMeshControlPlane
    metadata:
      name: basic
      namespace: istio-system
    spec:
      version: v{{ MaistraVersion }}
      security:
        identity:
          type: ThirdParty (1)
      tracing:
        type: None
        sampling: 10000
      policy:
        type: Istiod
      addons:
        grafana:
          enabled: true
        kiali:
          enabled: true
        prometheus:
          enabled: true
      telemetry:
        type: Istiod
    ```
{% if openshift_rosa or openshift_rosa_hcp %}
    1.  Specifies a required setting for {{ product_rosa }}.
{% endif %}
{% if openshift_dedicated %}
    1.  Specifies a required setting for {{ product_dedicated }}.
{% endif %}
{% endif %}
1.  Run the following command to deploy the {{ SMProductShortName }} control plane, where `<istio_installation.yaml>` includes the full path to your file.
    ```terminal
    $ oc create -n istio-system -f <istio_installation.yaml>
    ```
1.  To watch the progress of the pod deployment, run the following command:
    ```terminal
    $ oc get pods -n istio-system -w
    ```

    You should see output similar to the following:
    ```terminal
    NAME                                   READY   STATUS    RESTARTS   AGE
    grafana-b4d59bd7-mrgbr                 2/2     Running   0          65m
    istio-egressgateway-678dc97b4c-wrjkp   1/1     Running   0          108s
    istio-ingressgateway-b45c9d54d-4qg6n   1/1     Running   0          108s
    istiod-basic-55d78bbbcd-j5556          1/1     Running   0          108s
    kiali-6476c7656c-x5msp                 1/1     Running   0          43m
    prometheus-58954b8d6b-m5std            2/2     Running   0          66m
    ```