{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uploading an {{ insights_operator }} archive {id="insights-operator-manual-upload_{{ context }}"}

You can manually upload an {{ insights_operator }} archive to [console.redhat.com](https://console.redhat.com) to diagnose potential issues. {._abstract}

**Prerequisites**

*   You are logged in to {{ product_title }} as `cluster-admin`.
*   You have a workstation with unrestricted internet access.
*   You have created a copy of the {{ insights_operator }} archive.

**Procedure**

1.  Download the `dockerconfig.json` file:
    ```terminal
    $ oc extract secret/pull-secret -n openshift-config --to=.
    ```
1.  Copy your `"cloud.openshift.com"` `"auth"` token from the `dockerconfig.json` file:
    ```json
    {
      "auths": {
        "cloud.openshift.com": {
          "auth": "_<your_token>_",
          "email": "asd@redhat.com"
        }
    }
    ```
1.  Upload the archive to [console.redhat.com](https://console.redhat.com):
    ```terminal
    $ curl -v -H "User-Agent: insights-operator/one10time200gather184a34f6a168926d93c330 cluster/_<cluster_id>_" -H "Authorization: Bearer _<your_token>_" -F "upload=@_<path_to_archive>_; type=application/vnd.redhat.openshift.periodic+tar" https://console.redhat.com/api/ingress/v1/upload
    ```

    where:

    `<cluster_id>`
    :   Specifies the cluster ID.

    `<your_token>`
    :   Specifies the token from your pull secret. 

    `<path_to_archive>`
    :   Specifies the path to the {{ insights_operator }} archive.
    If the operation is successful, the command returns a `"request_id"` and `"account_number"`:
    ```terminal title="Example output"
    * Connection #0 to host console.redhat.com left intact
    {"request_id":"393a7cf1093e434ea8dd4ab3eb28884c","upload":{"account_number":"6274079"}}%
    ```

**Verification**

1.  Log in to [https://console.redhat.com/openshift](https://console.redhat.com/openshift).
1.  Click the **Cluster List** menu in the left pane.
1.  To display the details of the cluster, click the cluster name.
1.  Open the **{{ red_hat_lightspeed }} Advisor** tab of the cluster.

    If the upload was successful, the tab displays one of the following:
    *   **Your cluster passed all recommendations**, if the {{ red_hat_lightspeed }} advisor service did not identify any issues.
    *   A list of issues that the {{ red_hat_lightspeed }} advisor service has detected, prioritized by risk (low, moderate, important, and critical).