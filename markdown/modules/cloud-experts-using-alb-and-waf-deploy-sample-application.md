{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploy a sample application {id="cloud-experts-using-alb-and-waf-deploy-sample-application_{{ context }}"}

Deploy a sample application with an AWS Application Load Balancer (ALB) Ingress to verify your load balancer configuration. {._abstract}

**Procedure**

1.  Create a new project for the sample application:
    ```terminal
    $ oc new-project hello-world
    ```
1.  Deploy a `hello-world` application:
    ```terminal
    $ oc new-app -n hello-world --image=docker.io/openshift/hello-openshift
    ```
1.  Convert the pre-created service resource to a NodePort service type:
    ```terminal
    $ oc -n hello-world patch service hello-openshift -p '{"spec":{"type":"NodePort"}}'
    ```
1.  Deploy an AWS ALB using the AWS Load Balancer Operator:
    ```terminal
    $ cat << EOF | oc apply -f -
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: hello-openshift-alb
      namespace: hello-world
      annotations:
        alb.ingress.kubernetes.io/scheme: internet-facing
    spec:
      ingressClassName: alb
      rules:
        - http:
            paths:
              - path: /
                pathType: Exact
                backend:
                  service:
                    name: hello-openshift
                    port:
                      number: 8080
    EOF
    ```
1.  Curl the AWS ALB Ingress endpoint to verify the `hello-world` application is accessible:

    :::note

    AWS ALB provisioning takes a few minutes. If you receive an error that says `curl: (6) Could not resolve host`, please wait and try again.
    
    :::

    ```terminal
    $ INGRESS=$(oc -n hello-world get ingress hello-openshift-alb -o jsonpath='{.status.loadBalancer.ingress[0].hostname}')
    $ curl "http://${INGRESS}"
    ```
    ```text title="Example output"
    Hello OpenShift!
    ```