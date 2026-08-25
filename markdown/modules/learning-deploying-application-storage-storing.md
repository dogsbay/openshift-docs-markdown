{%- set _mod_docs_content_type = "PROCEDURE" %}
# Storing your file {id="learning-deploying-application-storage-storing_{{ context }}"}

To demonstrate the persistent storage capabilities of the cluster, store files within your application by using the OSToy console. {._abstract}

**Procedure**

1.  In the OSToy app console, click **Persistent Storage** in the left menu.
1.  In the **Filename** box, enter a file name with a `.txt` extension, for example `test-pv.txt`.
1.  In the **File contents** box, enter a sentence of text, for example `OpenShift is the greatest thing since sliced bread!`.
1.  Click **Create file**.
    ![cloud-experts-storage-ostoy-createfile](/_assets/images/cloud-experts-storage-ostoy-createfile.png)
    **Verification**

1.  Scroll to **Existing files** on the OSToy app console.
1.  Click the file you created to see the file name and contents.
    ![cloud-experts-storage-ostoy-viewfile](/_assets/images/cloud-experts-storage-ostoy-viewfile.png)