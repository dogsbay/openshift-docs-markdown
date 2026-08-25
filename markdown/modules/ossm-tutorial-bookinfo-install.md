{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Bookinfo application {id="ossm-tutorial-bookinfo-install_{{ context }}"}

This tutorial walks you through how to create a sample application by creating a project, deploying the Bookinfo application to that project, and viewing the running application in {{ SMProductShortName }}.

**Prerequisites**

*   {{ product_title }} 4.1 or higher installed.
*   {{ SMProductName }} {{ SMProductVersion }} installed.
*   Access to the OpenShift CLI (`oc`).
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   You are logged in to {{ product_title }} as`cluster-admin`.
{%- endif %}
{%- if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
*   You are logged in to {{ product_title }} as a user with the `dedicated-admin` role.
{%- endif %}

{% if not (openshift_rosa or openshift_rosa_hcp) %}

:::note

The Bookinfo sample application cannot be installed on {{ ibm_z_name }} and {{ ibm_power_name }}.

:::


{% endif %}

:::note

The commands in this section assume the {{ SMProductShortName }} control plane project is `istio-system`.  If you installed the control plane in another namespace, edit each command before you run it.

:::


**Procedure**

1.  Click **Home** → **Projects**.
1.  Click **Create Project**.
1.  Enter `bookinfo` as the **Project Name**, enter a **Display Name**, and enter a **Description**, then click **Create**.
    *   Alternatively, you can run this command from the CLI to create the `bookinfo` project.
        ```terminal
        $ oc new-project bookinfo
        ```
1.  Click **Ecosystem** → **Installed Operators**.
1.  Click the **Project** menu and use the {{ SMProductShortName }} control plane namespace. In this example, use `istio-system`.
1.  Click the **{{ SMProductName }}** Operator.
1.  Click the **Istio Service Mesh Member Roll** tab.
    1.  If you have already created a Istio Service Mesh Member Roll, click the name, then click the YAML tab to open the YAML editor.
    1.  If you have not created a `ServiceMeshMemberRoll`, click **Create ServiceMeshMemberRoll**.
1.  Click **Members**, then enter the name of your project in the **Value** field.
1.  Click **Create** to save the updated Service Mesh Member Roll.
    1.  Or, save the following example to a YAML file.
        ```yaml title="Bookinfo ServiceMeshMemberRoll example servicemeshmemberroll-default.yaml"
        apiVersion: maistra.io/v1
        kind: ServiceMeshMemberRoll
        metadata:
          name: default
        spec:
          members:
          - bookinfo
        ```
    1.  Run the following command to upload that file and create the `ServiceMeshMemberRoll` resource in the `istio-system` namespace.   In this example, `istio-system` is the name of the {{ SMProductShortName }} control plane project.
        ```terminal
        $ oc create -n istio-system -f servicemeshmemberroll-default.yaml
        ```
1.  Run the following command to verify the `ServiceMeshMemberRoll` was created successfully.
    ```terminal
    $ oc get smmr -n istio-system -o wide
    ```

    The installation has finished successfully when the `STATUS` column is `Configured`.
    ```terminal
    NAME      READY   STATUS       AGE   MEMBERS
    default   1/1     Configured   70s   ["bookinfo"]
    ```
1.  From the CLI, deploy the Bookinfo application in the _`bookinfo`_ project by applying the `bookinfo.yaml` file:
    ```bash {minja}
    $ oc apply -n bookinfo -f https://raw.githubusercontent.com/Maistra/istio/maistra-{{ MaistraVersion }}/samples/bookinfo/platform/kube/bookinfo.yaml
    ```

    You should see output similar to the following:
    ```terminal
    service/details created
    serviceaccount/bookinfo-details created
    deployment.apps/details-v1 created
    service/ratings created
    serviceaccount/bookinfo-ratings created
    deployment.apps/ratings-v1 created
    service/reviews created
    serviceaccount/bookinfo-reviews created
    deployment.apps/reviews-v1 created
    deployment.apps/reviews-v2 created
    deployment.apps/reviews-v3 created
    service/productpage created
    serviceaccount/bookinfo-productpage created
    deployment.apps/productpage-v1 created
    ```
1.  Create the ingress gateway by applying the `bookinfo-gateway.yaml` file:
    ```bash {minja}
    $ oc apply -n bookinfo -f https://raw.githubusercontent.com/Maistra/istio/maistra-{{ MaistraVersion }}/samples/bookinfo/networking/bookinfo-gateway.yaml
    ```

    You should see output similar to the following:
    ```terminal
    gateway.networking.istio.io/bookinfo-gateway created
    virtualservice.networking.istio.io/bookinfo created
    ```
1.  Set the value for the `GATEWAY_URL` parameter:
    ```terminal
    $ export GATEWAY_URL=$(oc -n istio-system get route istio-ingressgateway -o jsonpath='{.spec.host}')
    ```