{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing Knative Eventing by using the web console {id="serverless-install-eventing-web-console_{{ context }}"}

After you install the {{ ServerlessOperatorName }}, install Knative Eventing by using the {{ product_title }} web console. You can install Knative Eventing by using the default settings or configure more advanced settings in the `KnativeEventing` custom resource (CR).

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
1.  Check that the **Project** dropdown at the top of the page is set to **Project: knative-eventing**.
1.  Click **Knative Eventing** in the list of **Provided APIs** for the {{ ServerlessOperatorName }} to go to the **Knative Eventing** tab.
1.  Click **Create Knative Eventing**.
1.  In the **Create Knative Eventing** page, you can choose to configure the `KnativeEventing` object by using either the default form provided, or by editing the YAML.
    *   Using the form is recommended for simpler configurations that do not require full control of `KnativeEventing` object creation.

        Optional. If you are configuring the `KnativeEventing` object using the form, make any changes that you want to implement for your Knative Eventing deployment.
1.  Click **Create**.
    *   Editing the YAML is recommended for more complex configurations that require full control of `KnativeEventing` object creation. You can access the YAML by clicking the **edit YAML** link in the top right of the **Create Knative Eventing** page.

        Optional. If you are configuring the `KnativeEventing` object by editing the YAML, make any changes to the YAML that you want to implement for your Knative Eventing deployment.
1.  Click **Create**.
1.  After you have installed Knative Eventing, the `KnativeEventing` object is created, and you are automatically directed to the **Knative Eventing** tab. You will see the `knative-eventing` custom resource in the list of resources.

**Verification**

1.  Click on the `knative-eventing` custom resource in the **Knative Eventing** tab.
1.  You are automatically directed to the **Knative Eventing Overview** page.
    ![Knative Eventing Overview page](/images/eventing-overview.png)
1.  Scroll down to look at the list of **Conditions**.
1.  You should see a list of conditions with a status of **True**, as shown in the example image.
    ![Conditions](/images/eventing-conditions-true.png)

    :::note

    It may take a few seconds for the Knative Eventing resources to be created. You can check their status in the **Resources** tab.
    
    :::

1.  If the conditions have a status of **Unknown** or **False**, wait a few moments and then check again after you have confirmed that the resources have been created.