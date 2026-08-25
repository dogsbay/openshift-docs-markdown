{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploy a sample application {id="cloud-experts-using-cloudfront-and-waf-deploy-sample-application_{{ context }}"}

Deploy a sample application by using the {{ oc_first }} tool. {._abstract}

**Procedure**

1.  Create a new project for your sample application by running the following command:
    ```terminal
    $ oc new-project hello-world
    ```
1.  Deploy a `hello-world` application:
    ```terminal
    $ oc -n hello-world new-app --image=docker.io/openshift/hello-openshift
    ```
1.  Create a route for the application specifying your custom domain name:
    ```terminal title="Example"
    $ oc -n hello-world create route edge --service=hello-openshift hello-openshift-tls \
    --hostname hello-openshift.${DOMAIN}
    ```
1.  Label the route to admit it to your custom ingress controller:
    ```terminal
    $ oc -n hello-world label route.route.openshift.io/hello-openshift-tls route=waf
    ```