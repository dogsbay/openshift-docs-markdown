{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Kubernetes NMState Operator by using the web console {id="installing-the-kubernetes-nmstate-operator-web-console_{{ context }}"}

You can install the Kubernetes NMState Operator by using the web console. After you install the Kubernetes NMState Operator, the Operator has deployed the NMState State Controller as a daemon set across all of the cluster nodes. {._abstract}

**Prerequisites**

*   You are logged in as a user with `cluster-admin` privileges.

**Procedure**

1.  Select **Ecosystem** → **Software Catalog**.
1.  In the search field below **All Items**, enter `nmstate` and click **Enter** to search for the Kubernetes NMState Operator.
1.  Click on the Kubernetes NMState Operator search result.
1.  Click on **Install** to open the **Install Operator** window.
1.  Click **Install** to install the Operator.
1.  After the Operator finishes installing, click **View Operator**.
1.  Under **Provided APIs**, click **Create Instance** to open the dialog box for creating an instance of `kubernetes-nmstate`.
1.  In the **Name** field of the dialog box, ensure the name of the instance is `nmstate.`

    :::note

    The name restriction is a known issue. The instance is a singleton for the entire cluster.
    
    :::

1.  Accept the default settings and click **Create** to create the instance.