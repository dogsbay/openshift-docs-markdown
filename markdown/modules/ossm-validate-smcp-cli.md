{%- set _mod_docs_content_type = "PROCEDURE" %}
# Validating your SMCP installation with the CLI {id="ossm-validate-control-plane-cli_{{ context }}"}
You can validate the creation of the `ServiceMeshControlPlane` from the command line.

1.  Prerequisites
    *   The {{ SMProductName }} Operator must be installed.
    *   Access to the OpenShift CLI (`oc`).
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
    *   You are logged in to {{ product_title }} as`cluster-admin`.
{%- endif %}
{%- if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
    *   You are logged in to {{ product_title }} as a user with the `dedicated-admin` role.
{%- endif %}

**Procedure**

1.  Run the following command to verify the {{ SMProductShortName }} control plane installation, where `istio-system` is the namespace where you installed the {{ SMProductShortName }} control plane.
    ```terminal
    $ oc get smcp -n istio-system
    ```

    The installation has finished successfully when the `STATUS` column is `ComponentsReady`.
    ```terminal {minja}
    NAME    READY   STATUS            PROFILES      VERSION   AGE
    basic   10/10   ComponentsReady   ["default"]   {{ SMProductVersion }}     66m
    ```