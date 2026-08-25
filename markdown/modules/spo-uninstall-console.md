{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstall the Security Profiles Operator by using the web console {id="spo-uninstall-console_{{ context }}"}

To remove the Security Profiles Operator, you must first delete the `seccomp` and SELinux profiles. After the profiles are removed, you can then remove the Operator and its namespace by deleting the **openshift-security-profiles** project. {._abstract}

**Prerequisites**

*   You have access to the web console as a user with `cluster-admin` privileges.
*   The Security Profiles Operator is installed.

**Procedure**

1.  Navigate to the **Ecosystem** → **Installed Operators** page.
1.  Delete all `seccomp` profiles, SELinux profiles, and webhook configurations.
1.  Switch to the **Administration** → **Ecosystem** → **Installed Operators** page.
1.  Click the Options menu {{ kebab }} on the **Security Profiles Operator** entry.
1.  Select **Uninstall Operator**.
1.  Switch to the **Home** → **Projects** page.
1.  Search for `security profiles`.
1.  Click the Options menu {{ kebab }} next to the **openshift-security-profiles** project.
1.  Select **Delete Project**.
    1.  Enter `openshift-security-profiles` in the dialog box.
    1.  Click **Delete**.
1.  Delete the `MutatingWebhookConfiguration` object by running the following command:
    ```terminal
    $ oc delete MutatingWebhookConfiguration spo-mutating-webhook-configuration
    ```