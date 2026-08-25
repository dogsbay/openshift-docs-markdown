{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating multiple ingress resources through a single AWS Load Balancer {id="nw-creating-multiple-ingress-through-single-alb_{{ context }}"}

To route traffic to different services within a single domain, configure multiple ingress resources on a single AWS Load Balancer. This setup allows each resource to provide different endpoints while sharing the same load balancing infrastructure. {._abstract}

**Prerequisites**

*   You have access to the {{ oc_first }}.

**Procedure**

1.  Create an `IngressClassParams` resource YAML file, for example, `sample-single-lb-params.yaml`, as follows:
    ```yaml
    apiVersion: elbv2.k8s.aws/v1beta1
    kind: IngressClassParams
    metadata:
      name: single-lb-params
    spec:
      group:
        name: single-lb
    ```

    where:

    `apiVersion`
    :   Specifies the API group and version of the `IngressClassParams` resource.

    `metadata.name`
    :   Specifies the `IngressClassParams` resource name.

    `spec.group.name`
    :   Specifies the `IngressGroup` resource name. All of the `Ingress` resources of this class belong to this `IngressGroup`.

1.  Create the `IngressClassParams` resource by running the following command:
    ```terminal
    $ oc create -f sample-single-lb-params.yaml
    ```
1.  Create the `IngressClass` resource YAML file, for example, `sample-single-lb-class.yaml`, as follows:
    ```yaml
    apiVersion: networking.k8s.io/v1
    kind: IngressClass
    metadata:
      name: single-lb
    spec:
      controller: ingress.k8s.aws/alb
      parameters:
        apiGroup: elbv2.k8s.aws
        kind: IngressClassParams
        name: single-lb-params
    ```

    where:

    `apiVersion`
    :   Specifies the API group and version of the `IngressClass` resource.

    `metadata.name`
    :   Specifies the ingress class name.

    `spec.controller`
    :   Specifies the controller name. The `ingress.k8s.aws/alb` value denotes that all ingress resources of this class should be managed by the AWS Load Balancer Controller.

    `parameters.apiGroup`
    :   Specifies the API group of the `IngressClassParams` resource.

    `parameters.kind`
    :   Specifies the resource type of the `IngressClassParams` resource.

    `parameters.name`
    :   Specifies the `IngressClassParams` resource name.

1.  Create the `IngressClass` resource by running the following command:
    ```terminal
    $ oc create -f sample-single-lb-class.yaml
    ```
1.  Create the `AWSLoadBalancerController` resource YAML file, for example, `sample-single-lb.yaml`, as follows:
    ```yaml
    apiVersion: networking.olm.openshift.io/v1
    kind: AWSLoadBalancerController
    metadata:
      name: cluster
    spec:
      subnetTagging: Auto
      ingressClass: single-lb
    ```

    where:

    `spec.ingressClass`
    :   Specifies the name of the `IngressClass` resource.

1.  Create the `AWSLoadBalancerController` resource by running the following command:
    ```terminal
    $ oc create -f sample-single-lb.yaml
    ```
1.  Create the `Ingress` resource YAML file, for example, `sample-multiple-ingress.yaml`, as follows:
    ```yaml
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: example-1
      annotations:
        alb.ingress.kubernetes.io/scheme: internet-facing
        alb.ingress.kubernetes.io/group.order: "1"
        alb.ingress.kubernetes.io/target-type: instance
    spec:
      ingressClassName: single-lb
      rules:
      - host: example.com
        http:
            paths:
            - path: /blog
              pathType: Prefix
              backend:
                service:
                  name: example-1
                  port:
                    number: 80
    ---
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: example-2
      annotations:
        alb.ingress.kubernetes.io/scheme: internet-facing
        alb.ingress.kubernetes.io/group.order: "2"
        alb.ingress.kubernetes.io/target-type: instance
    spec:
      ingressClassName: single-lb
      rules:
      - host: example.com
        http:
            paths:
            - path: /store
              pathType: Prefix
              backend:
                service:
                  name: example-2
                  port:
                    number: 80
    ---
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: example-3
      annotations:
        alb.ingress.kubernetes.io/scheme: internet-facing
        alb.ingress.kubernetes.io/group.order: "3"
        alb.ingress.kubernetes.io/target-type: instance
    spec:
      ingressClassName: single-lb
      rules:
      - host: example.com
        http:
            paths:
            - path: /
              pathType: Prefix
              backend:
                service:
                  name: example-3
                  port:
                    number: 80
    ```

    where:

    `metadata.name`
    :   Specifies the ingress name.

    `alb.ingress.kubernetes.io/scheme`
    :   Specifies the load balancer to provision in the public subnet to access the internet.

    `alb.ingress.kubernetes.io/group.order`
    :   Specifies the order in which the rules from the multiple ingress resources are matched when the request is received at the load balancer.

    `alb.ingress.kubernetes.io/target-type`
    :   Specifies that the load balancer will target {{ product_title }} nodes to reach the service.

    `spec.ingressClassName`
    :   Specifies the ingress class that belongs to this ingress.

    `rules.host`
    :   Specifies a domain name used for request routing.

    `http.paths.path`
    :   Specifies the path that must route to the service.

    `backend.service.name`
    :   Specifies the service name that serves the endpoint configured in the `Ingress` resource.

    `port.number`
    :   Specifies the port on the service that serves the endpoint.

1.  Create the `Ingress` resource by running the following command:
    ```terminal
    $ oc create -f sample-multiple-ingress.yaml
    ```