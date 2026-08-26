{%- set _mod_docs_content_type = "PROCEDURE" %}
# Access restored files through a web browser {id="oadp-vmfr-accessing-files-web_{{ context }}"}

Access restored virtual machine (VM) files through a web browser by using the file browser interface provided by the `VirtualMachineFileRestore` (VMFR) custom resource (CR). You can browse, preview, and download files from VM backups. {._abstract}

**Prerequisites**

*   You are logged in to the cluster with the `cluster-admin` role.
*   A `VirtualMachineFileRestore` (VMFR) CR with the `fileAccess.fileBrowser` section configured exists.
*   The VMFR CR `status.phase` is `Completed`.

**Procedure**

1.  To retrieve the file browser access URLs, run the following command:
    ```terminal
    $ oc get vmfr <vmfr_cr_name> -n openshift-adp -o jsonpath='{.status.fileServingInfo.fileBrowser}'
    ```

    Replace `<vmfr_cr_name>` with the name of the VMFR CR. The output includes the `clusterAccess` URL for cluster-internal access and the `publicAccess` URL if `exposeExternally` is set to `true`.
1.  If the VMFR CR has `exposeExternally` set to `true`, open a web browser and navigate to the `publicAccess` URL from the status output.

    If `exposeExternally` is not enabled, set up port forwarding to the file-serving service by running the following command:
    ```terminal
    $ oc port-forward svc/vmfr-<vmfr_cr_name>-fileserver-svc -n <restore_namespace> 8443:8443
    ```

    Replace `<vmfr_cr_name>` with the name of the VMFR CR and `<restore_namespace>` with the namespace from the `status.createdNamespace` field. Then navigate to `https://localhost:8443` in your web browser.
1.  Log in by using the credentials from the secret you created for file browser access.

    **Figure 1. OADP VM File Restore Browser login page**

    ![OADP VM File Restore Browser login page](/images/oadp-vmfr-file-browser-login.png)
1.  Browse the files organized by date, backup name, and PVC name.

    **Figure 2. File browser listing showing backup contents**

    ![File browser listing showing backup contents](/images/oadp-vmfr-file-browser-listing.png)
1.  View the file content by selecting the file. To download a file, select the file and click **Download**. To download a directory as an archive, select the directory and click **Download**.

    **Figure 3. File preview in the file browser**

    ![File preview in the file browser](/images/oadp-vmfr-file-browser-preview.png)