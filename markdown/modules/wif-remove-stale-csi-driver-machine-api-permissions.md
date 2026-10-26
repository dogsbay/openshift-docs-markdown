{%- set _mod_docs_content_type = "PROCEDURE" %}

# Remove stale CSI driver and Machine API permissions from service accounts managed by a WIF configuration {id="wif-remove-stale-csi-driver-machine-api-permissions_{{ context }}"}

You can remove stale permissions from the CSI driver and Machine API service accounts to reduce the scope of permissions to only those required for the cluster’s operation. {._abstract}

The `wif-config` permission set enables Workload Identity Federation (WIF) authentication for {{ product_title }} service accounts to securely interact with {{ gcp_full }} services.


:::note

This procedure is applicable to clusters using WIF with versions `4.20`, `4.21`, and `4.22`.

:::


**Prerequisites**

*   You have set the `PROJECT_ID` environment variable to your {{ gcp_full }} project ID:
    ```terminal
    $ export PROJECT_ID=<your_gcp_project_id>
    ```
*   You have set the `WIF_SUFFIX` environment variable to the last four characters of the `wif-config` ID:
    ```terminal
    $ export WIF_SUFFIX=<last_four_characters_of_wif_config_id>
    ```
*   You have set the `WIF_ID` environment variable to your WIF configuration ID:
    ```terminal
    $ export WIF_ID=<your_wif_config_id>
    ```

**Procedure**

1.  Prune the `wif-config` to only include version `4.20` and later versions. Only manual mode is supported for pruning operations:
    ```terminal
    $ ocm gcp update wif-config ${WIF_ID} --versions v4.20,v4.21,v4.22 --mode manual --output-dir /tmp/scripts/
    ```
1.  Execute the generated scripts to apply the changes:
    ```terminal
    $ /tmp/scripts/apply.sh
    $ /tmp/scripts/prune.sh
    ```
1.  Remove the CSI driver service account’s redundant project-level `iam.serviceAccountUser` role binding:
    ```terminal
    $ gcloud projects remove-iam-policy-binding "${PROJECT_ID}" \
      --member="serviceAccount:gcp-pd-csi-driver-op-${WIF_SUFFIX}@${PROJECT_ID}.iam.gserviceaccount.com" \
      --role="roles/iam.serviceAccountUser" \
      --condition=None
    ```
1.  Remove the `iam.serviceAccounts.actAs` permission from the Machine API service account custom role. Repeat the following sub-steps for each applicable version (`v4.20`, `v4.21`, `v4.22`):
    1.  Set the `VERSION` environment variable to the target version:
        ```terminal
        $ export VERSION=<version>
        ```

        Replace `<version>` with `v4.20`, `v4.21`, or `v4.22`.
    1.  Retrieve the existing role definition:
        ```terminal
        $ gcloud iam roles describe machine_api_gcp_${VERSION} \
          --project $PROJECT_ID \
          --format=yaml > /tmp/role.yaml
        ```
    1.  Remove the unwanted permission. You can do this by filtering out the unwanted permission from the role definition file and saving the updated definition to a new file:
        ```terminal
        $ cat /tmp/role.yaml | grep -v "iam.serviceAccounts.actAs" > /tmp/updated_role.yaml
        ```
    1.  Review the changes in the output between the original and updated role definitions to ensure only the intended permission line was removed.
    Verify that no comments, descriptions, or other metadata lines were unintentionally filtered:
        ```terminal
        $ diff /tmp/role.yaml /tmp/updated_role.yaml
        ```
    1.  Update the role in {{ gcp_full }} with the updated role definition file:
        ```terminal
        $ gcloud iam roles update machine_api_gcp_${VERSION} \
          --project $PROJECT_ID \
          --file=/tmp/updated_role.yaml
        ```

**Verification**

*   Verify that the `iam.serviceAccounts.actAs` permission is no longer listed in the Machine API role for each applicable version:
    ```terminal
    $ gcloud iam roles describe machine_api_gcp_${VERSION} \
      --project $PROJECT_ID
    ```

    Confirm that `iam.serviceAccounts.actAs` is no longer present in the `includedPermissions` list.