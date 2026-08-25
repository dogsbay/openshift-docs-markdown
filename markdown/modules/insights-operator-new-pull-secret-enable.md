{%- set _mod_docs_content_type = "PROCEDURE" %}
# Changing your global cluster pull secret to enable remote health reporting {id="insights-operator-new-pull-secret-enable_{{ context }}"}

You can change your existing global cluster pull secret to enable remote health reporting. If you have disabled remote health monitoring, you must download a new pull secret with your `console.openshift.com` access token from {{ cluster_manager_first }}. {._abstract}

**Prerequisites**

*   Access to the cluster as a user with the `cluster-admin` role.
*   Access to {{ cluster_manager }}.

**Procedure**

1.  Go to the [Downloads](https://console.redhat.com/openshift/downloads) page on the {{ hybrid_console }}.
1.  From **Tokens** → **Pull secret**, click the **Download** button.

    The `pull-secret` file contains your `cloud.openshift.com` access token in JSON format:
    ```json
    {
      "auths": {
        "cloud.openshift.com": {
          "auth": "_<your_token>_",
          "email": "_<email_address>_"
        }
      }
    }
    ```
1.  Download the global cluster pull secret to your local file system.
    ```terminal
    $ oc get secret/pull-secret -n openshift-config \
      --template='{{index .data ".dockerconfigjson" | base64decode}}' \
      > pull-secret
    ```
1.  Make a backup copy of your pull secret.
    ```terminal
    $ cp pull-secret pull-secret-backup
    ```
1.  Open the `pull-secret` file in a text editor.
1.  Append the `cloud.openshift.com` JSON entry from the `pull-secret` file that you downloaded earlier into the `auths` file.
1.  Save the file.
1.  Update the secret in your cluster by running the following command:
    ```terminal
    $ oc set data secret/pull-secret -n openshift-config \
      --from-file=.dockerconfigjson=pull-secret
    ```

    You might need to wait several minutes for the secret to update and your cluster to begin reporting.

**Verification**

1.  For a verification check from the {{ product_title }} web console, complete the following steps:
    1.  Go to the **Overview** page on the {{ product_title }} web console.
    1.  View the **{{ red_hat_lightspeed }}** section in the **Status** tile that reports the number of issues found.
1.  For a verification check from the {{ oc_first }}, enter the following command and then check that the value of the `status` parameter states `false`:
    ```terminal
    $ oc get co insights -o jsonpath='{.status.conditions[?(@.type=="Disabled")]}'
    ```