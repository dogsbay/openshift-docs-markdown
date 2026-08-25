{%- set _mod_docs_content_type = "PROCEDURE" %}
# Validating Operator installation {id="aws-load-balancer-operator-validate-install_{{ context }}"}

To confirm that the AWS Load Balancer Operator and Controller have installed correctly, deploy a basic sample application. This validation process involves creating ingress and load balancing services to test the deployment. {._abstract}

**Procedure**

1.  Create a new project:
    ```terminal
    $ oc new-project hello-world
    ```
1.  Create a new `hello-world` application based on the `hello-openshift` image:
    ```terminal
    $ oc new-app -n hello-world --image=docker.io/openshift/hello-openshift
    ```
1.  Configure a `NodePort` service for an AWS Application Load Balancer (ALB) to connect to:
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
1.  Deploy an AWS ALB for the application:
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
1.  Test access to the AWS ALB endpoint for the application:

    :::note

    ALB provisioning takes a few minutes. If you receive an error that says `curl: (6) Could not resolve host`, wait and try again.
    
    :::

    ```terminal
    $ ALB_INGRESS=$(oc -n hello-world get ingress hello-openshift-alb \
        -o jsonpath='{.status.loadBalancer.ingress[0].hostname}')
    ```
    ```terminal
    $ curl "http://${ALB_INGRESS}"
    ```
    ```text title="Example output"
    Hello OpenShift!
    ```
1.  Deploy an AWS Network Load Balancer (NLB) for the application:
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

    The `service.beta.kubernetes.io/aws-load-balancer-type` annotation is immutable for existing services. To change the load balancer type, you must recreate the service.
1.  Test access to the NLB endpoint for the application:

    :::note

    NLB provisioning takes a few minutes. If you receive an error that says `curl: (6) Could not resolve host`, wait and try again.
    
    :::

    ```terminal
    $ NLB=$(oc -n hello-world get service hello-openshift-nlb \
      -o jsonpath='{.status.loadBalancer.ingress[0].hostname}')
    ```
    ```terminal
    $ curl "http://${NLB}"
    ```

    Expected output shows `Hello OpenShift!`.
1.  You can now delete the sample application and all resources in the  `hello-world` namespace.
    ```terminal
    $ oc delete project hello-world
    ```