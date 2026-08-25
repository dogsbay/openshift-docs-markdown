{% if context == "configuring-an-openshift-cluster-by-deploying-an-application-with-cluster-configurations" %}
{%- set cluster = true -%}
{% endif %}
{% if context == "deploying-a-spring-boot-application-with-argo-cd" %}
{%- set app = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an application by using the `oc` tool {id="creating-an-application-by-using-the-oc-tool_{{ context }}"}

You can create Argo CD applications in your terminal by using the `oc` tool.

**Procedure**

1.  Download [the sample application](https://github.com/redhat-developer/openshift-gitops-getting-started):
    ```terminal
    $ git clone git@github.com:redhat-developer/openshift-gitops-getting-started.git
    ```
1.  Create the application:
{%- if app %}
    ```terminal
    $ oc create -f openshift-gitops-getting-started/argo/app.yaml
    ```
{%- endif %}

{% if cluster %}
    ```terminal
    $ oc create -f openshift-gitops-getting-started/argo/app.yaml
    ```
{% endif %}
1.  Run the `oc get` command to review the created application:
    ```terminal
    $ oc get application -n openshift-gitops
    ```
1.  Add a label to the namespace your application is deployed in so that the Argo CD instance in the `openshift-gitops` namespace can manage it:

{% if app %}
    ```terminal
    $ oc label namespace spring-petclinic argocd.argoproj.io/managed-by=openshift-gitops
    ```
{% endif %}
{% if cluster %}
    ```terminal
    $ oc label namespace spring-petclinic argocd.argoproj.io/managed-by=openshift-gitops
    ```
{% endif %}