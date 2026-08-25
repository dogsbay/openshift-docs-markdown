{%- set _mod_docs_content_type = "PROCEDURE" %}
# Run a self validation checkup in the web console {id="virt-run-self-validation-checkup-web-console_{{ context }}"}

Running a self validation checkup streamlines the process of running functional tests, which enables you to validate the stability, health, and compliance of an {{ VirtProductName }} installation before deploying workloads. {._abstract}

**Prerequisites**

*   You have cluster administrator permissions.
*   You have access to an {{ product_title }} cluster where {{ VirtProductName }} is installed.
*   You are logged in to the {{ product_title }} web console.

**Procedure**

1.  In the {{ product_title }} web console, go to **Virtualization** -> **Checkups**.
1.  Go to the **Self validation** tab.
1.  Click **Run checkup**.
1.  Configure settings for the test that you want to run.
1.  Optional: You can enable a dry run test by clicking **Advanced settings** and then toggling the **Dry run** button.
1.  Click **Run**. The **Self validation checkup details** page is displayed.

    You can observe the self validation checkup running in real time. The test can take several hours to complete.
1.  After the test is complete, you can view high-level results in the **Self validation checkup details** page, including the names of any failing tests.
1.  Optional: You can download detailed results as a ZIP file by clicking **Download results** in the **Self validation checkup details** page.