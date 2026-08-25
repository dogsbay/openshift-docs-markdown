{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ ServerlessOperatorName }} from the web console {id="serverless-install-web-console_{{ context }}"}

You can install the {{ ServerlessOperatorName }} from the software catalog by using the {{ product_title }} web console. Installing this Operator enables you to install and use Knative components.

**Prerequisites**

{% if openshift_enterprise %}
*   You have access to an {{ product_title }} account with cluster administrator access.
*   Your cluster has the Marketplace capability enabled or the Red Hat Operator catalog source configured manually.
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
*   You have access to an {{ product_title }} account with cluster or dedicated administrator access.
{% endif %}

*   You have logged in to the {{ product_title }} web console.

**Procedure**

1.  In the {{ product_title }} web console, navigate to the **Ecosystem** → **Software Catalog** page.
1.  Scroll, or type the keyword **Serverless** into the **Filter by keyword** box to find the {{ ServerlessOperatorName }}.
1.  Review the information about the Operator and click **Install**.
1.  On the **Install Operator** page:
    1.  The **Installation Mode** is **All namespaces on the cluster (default)**. This mode installs the Operator in the default `openshift-serverless` namespace to watch and be made available to all namespaces in the cluster.
    1.  The **Installed Namespace** is `openshift-serverless`.
    1.  Select the **stable** channel as the **Update Channel**. The **stable** channel will enable installation of the latest stable release of the {{ ServerlessOperatorName }}.
    1.  Select **Automatic** or **Manual** approval strategy.
1.  Click **Install** to make the Operator available to the selected namespaces on this {{ product_title }} cluster.
1.  From the **Catalog** → **Operator Management** page, you can monitor the {{ ServerlessOperatorName }} subscription’s installation and upgrade progress.
    1.  If you selected a **Manual** approval strategy, the subscription’s upgrade status will remain **Upgrading** until you review and approve its install plan. After approving on the **Install Plan** page, the subscription upgrade status moves to **Up to date**.
    1.  If you selected an **Automatic** approval strategy, the upgrade status should resolve to **Up to date** without intervention.

**Verification**

After the Subscription’s upgrade status is **Up to date**, select **Catalog** → **Installed Operators** to verify that the {{ ServerlessOperatorName }} eventually shows up and its **Status** ultimately resolves to **InstallSucceeded** in the relevant namespace.

If it does not:

1.  Switch to the **Catalog** → **Operator Management** page and inspect the **Operator Subscriptions** and **Install Plans** tabs for any failure or errors under **Status**.
1.  Check the logs in any pods in the `openshift-serverless` project on the **Workloads** → **Pods** page that are reporting issues to troubleshoot further.