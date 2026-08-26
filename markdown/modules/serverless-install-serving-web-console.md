{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing Knative Serving by using the web console {id="serverless-install-serving-web-console_{{ context }}"}

After you install the {{ ServerlessOperatorName }}, install Knative Serving by using the {{ product_title }} web console. You can install Knative Serving by using the default settings or configure more advanced settings in the `KnativeServing` custom resource (CR).

**Prerequisites**

{% if openshift_enterprise %}
*   You have access to an {{ product_title }} account with cluster administrator access.
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
*   You have access to an {{ product_title }} account with cluster administrator or dedicated administrator access.
{% endif %}

*   You have logged in to the {{ product_title }} web console.
*   You have installed the {{ ServerlessOperatorName }}.

**Procedure**

1.  In the **Administrator** perspective of the {{ product_title }} web console, navigate to **Ecosystem** → **Installed Operators**.
1.  Check that the **Project** dropdown at the top of the page is set to **Project: knative-serving**.
1.  Click **Knative Serving** in the list of **Provided APIs** for the {{ ServerlessOperatorName }} to go to the **Knative Serving** tab.
1.  Click **Create Knative Serving**.
1.  In the **Create Knative Serving** page, you can install Knative Serving using the default settings by clicking **Create**.

    You can also modify settings for the Knative Serving installation by editing the `KnativeServing` object using either the form provided, or by editing the YAML.
    *   Using the form is recommended for simpler configurations that do not require full control of `KnativeServing` object creation.
    *   Editing the YAML is recommended for more complex configurations that require full control of `KnativeServing` object creation. You can access the YAML by clicking the **edit YAML** link in the top right of the **Create Knative Serving** page.

        After you complete the form, or have finished modifying the YAML, click **Create**.

        :::note

        For more information about configuration options for the KnativeServing custom resource definition, see the documentation on _Advanced installation configuration options_.
        
        :::

1.  After you have installed Knative Serving, the `KnativeServing` object is created, and you are automatically directed to the **Knative Serving** tab. You will see the `knative-serving` custom resource in the list of resources.

**Verification**

1.  Click on `knative-serving` custom resource in the **Knative Serving** tab.
1.  You will be automatically directed to the **Knative Serving Overview** page.
    ![Installed Operators page](/images/serving-overview.png)
1.  Scroll down to look at the list of **Conditions**.
1.  You should see a list of conditions with a status of **True**, as shown in the example image.
    ![Conditions](/images/serving-conditions-true.png)

    :::note

    It may take a few seconds for the Knative Serving resources to be created. You can check their status in the **Resources** tab.
    
    :::

1.  If the conditions have a status of **Unknown** or **False**, wait a few moments and then check again after you have confirmed that the resources have been created.