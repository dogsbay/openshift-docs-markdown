{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing the application {id="learning-deploying-application-deployment-viewing-application_{{ context }}"}

After you deploy OSToy, you can view the application by accessing its URL. {._abstract}

**Procedure**

1.  Copy the `ostoy-route-ostoy.apps.<your-rosa-cluster>.abcd.p1.openshiftapps.com` URL output from the previous step.
1.  Paste the copied URL into your web browser and press enter. You should see the homepage of your application. If the page does not load, make sure you used `http` and not `https`.
    ![OStoy application homepage](/_assets/images/4-ostoy-homepage.png)