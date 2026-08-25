{%- set _mod_docs_content_type = "PROCEDURE" %}
# Managing weights of a new route by using the web console {id="deployments-ab-testing-lb-web-new-route_{{ context }}"}

To set traffic weights when you create a new route for A/B testing in {{ product_title }}, you can use the web console. Create the route, add an alternate service, and assign relative weights so the router distributes requests between application versions. {._abstract}

**Procedure**

1.  Navigate to the **Networking** → **Routes** page.
1.  Click **Create Route**.
1.  Enter the route **Name**.
1.  Select the **Service**.
1.  Click **Add Alternate Service**.
1.  Enter a value for **Weight** and **Alternate Service Weight**. Enter a number between `0` and `255` that depicts relative weight compared with other targets. The default is `100`.
1.  Select the **Target Port**.
1.  Click **Create**.