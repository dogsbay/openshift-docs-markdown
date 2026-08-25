{%- set _mod_docs_content_type = "PROCEDURE" %}
# Logging in to the Argo CD instance by using the Argo CD admin account {id="logging-in-to-the-argo-cd-instance-by-using-the-argo-cd-admin-account_{{ context }}"}

{{ gitops_title }} Operator automatically creates a ready-to-use Argo CD instance that is available in the `openshift-gitops` namespace. {._abstract}

**Prerequisites**

*   You have installed the {{ gitops_title }} Operator in your cluster.

**Procedure**

1.  In the **Administrator** perspective of the web console, navigate to **Ecosystem** → **Installed Operators** to verify that the {{ gitops_title }} Operator is installed.
1.  Navigate to the {{ rh_app_icon }} menu → **OpenShift GitOps** → **Cluster Argo CD**. The login page of the Argo CD UI is displayed in a new window.
1.  Optional: To log in with your {{ product_title }} credentials, ensure you are a user of the `cluster-admins` group and then select the `LOG IN VIA OPENSHIFT` option in the Argo CD user interface.

    :::note

    To be a user of the `cluster-admins` group, use the `oc adm groups new cluster-admins <user>` command, where `<user>` is the default cluster role that you can bind to users and groups cluster-wide or locally.
    
    :::

1.  To log in with your username and password, obtain the password for the Argo CD instance:
    1.  In the left panel of the console, use the perspective switcher to switch to the **Developer** perspective.
    1.  Use the **Project** drop-down list and select the `openshift-gitops` project.
    1.  Use the left navigation panel to navigate to the **Secrets** page.
    1.  Select the **openshift-gitops-cluster** instance to display the password.
    1.  Copy the password.
1.  Use this password and `admin` as the username to log in to the Argo CD UI in the new window.


:::note

You cannot create two Argo CD CRs in the same namespace.

:::