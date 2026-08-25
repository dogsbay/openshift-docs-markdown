{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating Mixer policy enforcement {id="ossm-mixer-policy-1x_{{ context }}"}

In previous versions of {{ SMProductName }}, Mixer’s policy enforcement was enabled by default. Mixer policy enforcement is now disabled by default. You must enable it before running policy tasks.

**Prerequisites**

*   Access to the OpenShift CLI (`oc`).


:::note

The examples use `istio-system` as the control plane namespace. Replace this value with the namespace where you deployed the Service Mesh Control Plane (SMCP).

:::


**Procedure**

1.  Log in to the {{ product_title }} CLI.
1.  Run this command to check the current Mixer policy enforcement status:
    ```terminal
    $ oc get cm -n istio-system istio -o jsonpath='{.data.mesh}' | grep disablePolicyChecks
    ```
1.  If `disablePolicyChecks: true`, edit the {{ SMProductShortName }} ConfigMap:
    ```terminal
    $ oc edit cm -n istio-system istio
    ```
1.  Locate `disablePolicyChecks: true` within the ConfigMap and change the value to `false`.
1.  Save the configuration and exit the editor.
1.  Re-check the Mixer policy enforcement status to ensure it is set to `false`.