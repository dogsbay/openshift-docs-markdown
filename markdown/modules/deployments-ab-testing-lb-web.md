{%- set _mod_docs_content_type = "PROCEDURE" %}
# Managing weights of an existing route by using the web console {id="deployments-ab-testing-lb-web_{{ context }}"}

To split production traffic between application versions for A/B testing in {{ product_title }}, you can configure a route with weighted services. Use the `oc set route-backends` command or edit the route to assign weights so the router sends a proportional share of requests to each version. {._abstract}

**Procedure**

1.  Navigate to the **Networking** → **Routes** page.
1.  Click the Options menu {{ kebab }} next to the route you want to edit and select **Edit Route**.
1.  Edit the YAML file. Update the `weight` to be an integer between `0` and `256` that specifies the relative weight of the target against other target reference objects. The value `0` suppresses requests to this back end. The default is `100`. Run `oc explain routes.spec.alternateBackends` for more information about the options.
1.  Click **Save**.