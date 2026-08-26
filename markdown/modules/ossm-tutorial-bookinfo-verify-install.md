{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying the Bookinfo installation {id="ossm-tutorial-bookinfo-verify-install_{{ context }}"}

To confirm that the sample Bookinfo application was successfully deployed, perform the following steps.

**Prerequisites**

*   {{ SMProductName }} installed.
*   Complete the steps for installing the Bookinfo sample app.
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   You are logged in to {{ product_title }} as`cluster-admin`.
{%- endif %}
{%- if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
*   You are logged in to {{ product_title }} as a user with the `dedicated-admin` role.
{%- endif %}

**Procedure from CLI**

1.  Verify that all pods are ready with this command:
    ```terminal
    $ oc get pods -n bookinfo
    ```

    All pods should have a status of `Running`. You should see output similar to the following:
    ```terminal
    NAME                              READY   STATUS    RESTARTS   AGE
    details-v1-55b869668-jh7hb        2/2     Running   0          12m
    productpage-v1-6fc77ff794-nsl8r   2/2     Running   0          12m
    ratings-v1-7d7d8d8b56-55scn       2/2     Running   0          12m
    reviews-v1-868597db96-bdxgq       2/2     Running   0          12m
    reviews-v2-5b64f47978-cvssp       2/2     Running   0          12m
    reviews-v3-6dfd49b55b-vcwpf       2/2     Running   0          12m
    ```
1.  Run the following command to retrieve the URL for the product page:
    ```terminal
    echo "http://$GATEWAY_URL/productpage"
    ```
1.  Copy and paste the output in a web browser to verify the Bookinfo product page is deployed.

**Procedure from Kiali web console**

1.  Obtain the address for the Kiali web console.
    1.  Log in to the {{ product_title }} web console.
    1.  Navigate to **Networking** → **Routes**.
    1.  On the **Routes** page, select the {{ SMProductShortName }} control plane project, for example `istio-system`, from the **Namespace** menu.

        The **Location** column displays the linked address for each route.
    1.  Click the link in the **Location** column for Kiali.
    1.  Click **Log In With OpenShift**. The Kiali **Overview** screen presents tiles for each project namespace.
1.  In Kiali, click **Graph**.
1.  Select bookinfo from the **Namespace** list, and App graph from the **Graph Type** list.
1.  Click **Display idle nodes** from the **Display** menu.

    This displays nodes that are defined but have not received or sent requests. It can confirm that an application is properly defined, but that no request traffic has been reported.
    ![Kiali displaying bookinfo application](/images/ossm-kiali-graph-bookinfo.png)
    *   Use the **Duration** menu to increase the time period to help ensure older traffic is captured.
    *   Use the **Refresh Rate** menu to refresh traffic more or less often, or not at all.
1.  Click **Services**, **Workloads** or **Istio Config** to see list views of bookinfo components, and confirm that they are healthy.