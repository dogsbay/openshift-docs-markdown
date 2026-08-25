{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstall the File Integrity Operator using the web console {id="fio-uninstall-console_{{ context }}"}

To remove the File Integrity Operator, you must first delete the `FileIntegrity` objects in all namespaces. After the objects are removed, you can then remove the Operator and its namespace. {._abstract}

**Prerequisites**

*   You have access to an {{ product_title }} cluster that uses an account with `cluster-admin` permissions.
*   The File Integrity Operator is installed.

**Procedure**

1.  Navigate to the **Ecosystem** -> **Installed Operators** -> **File Integrity Operator** page.
1.  From the **File Integrity** tab, ensure the **Show operands in: All namespaces** default option is selected to list all `FileIntegrity` objects in all namespaces.
1.  Click the Options menu {{ kebab }} for a `FileIntegrity` object.
1.  Select **Delete FileIntegrity**.
1.  Repeat the previous two steps until no `FileIntegrity` objects remain.
1.  Go to the **Administration** -> **Ecosystem** -> **Installed Operators** page.
1.  Click the Options menu {{ kebab }} on the **File Integrity Operator** entry.
1.  Select **Uninstall Operator**.
1.  Go to the **Home** -> **Projects** page.
1.  Search for `openshift-file-integrity`.
1.  Click the Options menu {{ kebab }} for the **openshift-file-integrity** project entry.
1.  Select **Delete Project**. A **Delete Project** dialog box opens on the web console.

**Verification**

*   Type `openshift-file-integrity` in the **Delete Project** dialog box.
*   Click the **Delete** button.