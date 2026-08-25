{%- set _mod_docs_content_type = "PROCEDURE" %}
# Validate the AWS Load Balancer Operator deployment {id="cloud-experts-aws-load-balancer-operator-validating_{{ context }}"}

Deploy a sample application with Application Load Balancer (ALB) and Network Load Balancer (NLB) resources to verify that the AWS Load Balancer Operator successfully provisions load balancers to your cluster. {._abstract}

**Procedure**

1.  Create a new project:
    ```terminal
    $ oc new-project hello-world
    ```
1.  Deploy a `hello-world` application:
    ```terminal
    $ oc new-app -n hello-world --image=docker.io/openshift/hello-openshift
    ```
1.  Configure a NodePort service for the AWS Application Load Balancer (ALB) to connect to:
    ```terminal
    $ cat << EOF | oc apply -f -
    apiVersion: v1
    kind: Service
    metadata:
      name: hello-openshift-nodeport
      namespace: hello-world
    spec:
      ports:
        - port: 80
          targetPort: 8080
          protocol: TCP
      type: NodePort
      selector:
        deployment: hello-openshift
    EOF
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
                    name: hello-openshift-nodeport
                    port:
                      number: 80
    EOF
    ```
1.  Curl the AWS ALB Ingress endpoint to verify the `hello-world` application is accessible:

    :::note

    AWS ALB provisioning takes a few minutes. If you receive an error that says `curl: (6) Could not resolve host`, wait and try again.
    
    :::

    ```terminal
    $ INGRESS=$(oc -n hello-world get ingress hello-openshift-alb \
        -o jsonpath='{.status.loadBalancer.ingress[0].hostname}')
    $ curl "http://${INGRESS}"
    ```
    ```text title="Example output"
    Hello OpenShift!
    ```
1.  Deploy an AWS Network Load Balancer (NLB) for your `hello-world` application:
    ```terminal
    $ cat << EOF | oc apply -f -
    apiVersion: v1
    kind: Service
    metadata:
      name: hello-openshift-nlb
      namespace: hello-world
      annotations:
        service.beta.kubernetes.io/aws-load-balancer-type: external
        service.beta.kubernetes.io/aws-load-balancer-nlb-target-type: instance
        service.beta.kubernetes.io/aws-load-balancer-scheme: internet-facing
    spec:
      ports:
        - port: 80
          targetPort: 8080
          protocol: TCP
      type: LoadBalancer
      selector:
        deployment: hello-openshift
    EOF
    ```
1.  Test the AWS NLB endpoint:

    :::note

    NLB provisioning takes a few minutes. If you receive an error that says `curl: (6) Could not resolve host`, wait and try again.
    
    :::

    ```terminal
    $ NLB=$(oc -n hello-world get service hello-openshift-nlb \
      -o jsonpath='{.status.loadBalancer.ingress[0].hostname}')
    $ curl "http://${NLB}"
    ```
    ```text title="Example output"
    Hello OpenShift!
    ```