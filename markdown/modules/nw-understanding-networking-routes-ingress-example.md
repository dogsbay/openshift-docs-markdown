{%- set _mod_docs_content_type = "PROCEDURE" %}
# Example: Configuring routes and ingress to expose a web application {id="nw-understanding-networking-routes-ingress-example_{{ context }}"}

A web application is running on your {{ product_title }} cluster. You want to make the application accessible to external users. The application should be accessible through a specific domain name, and the traffic should be securely encrypted using TLS. The following example shows how to configure both routes and ingress to expose your web application to external traffic securely.

## Configuring Routes {id="nw-understanding-networking-routes-ingress-example-routes_{{ context }}"}

1.  Create a new project.
    ```terminal
    $ oc new-project webapp-project
    ```
1.  Deploy the web application.
    ```terminal
    $ oc new-app nodejs:12~https://github.com/sclorg/nodejs-ex.git --name=webapp
    ```
1.  Expose the service with a Route.
    ```terminal
    $ oc expose svc/webapp --hostname=webapp.example.com
    ```
1.  Secure the Route with TLS.
    1.  Create a TLS secret with your certificate and key.
        ```terminal
        $ oc create secret tls webapp-tls --cert=path/to/tls.crt --key=path/to/tls.key
        ```
    1.  Update the route to use the TLS secret.
        ```terminal
        $ oc patch route/webapp -p '{"spec":{"tls":{"termination":"edge","certificate":"path/to/tls.crt","key":"path/to/tls.key"}}}'
        ```

## Configuring ingress {id="nw-understanding-networking-routes-ingress-example-ingress_{{ context }}"}

1.  Create an ingress resource.

    Ensure your ingress Controller is installed and running in the cluster.
1.  Create a service for the web application. If not already created, expose the application as a service.
    ```yaml
    apiVersion: v1
    kind: Service
    metadata:
      name: webapp-service
      namespace: webapp-project
    spec:
      selector:
        app: webapp
      ports:
        - protocol: TCP
          port: 80
          targetPort: 8080
    ```
1.  Create the ingress resource.
    ```yaml
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: webapp-ingress
      namespace: webapp-project
      annotations:
        kubernetes.io/ingress.class: "nginx"
    spec:
      rules:
        - host: webapp.example.com
          http:
            paths:
              - path: /
                pathType: Prefix
                backend:
                  service:
                    name: webapp-service
                    port:
                      number: 80
    ```
1.  Secure the ingress with TLS.
    1.  Create a TLS secret with your certificate and key.
        ```terminal
        $ oc create secret tls webapp-tls --cert=path/to/tls.crt --key=path/to/tls.key -n webapp-project
        ```
    1.  Update the ingress resource to use the TLS secret.
        ```yaml
        apiVersion: networking.k8s.io/v1
        kind: Ingress
        metadata:
          name: webapp-ingress
          namespace: webapp-project
        spec:
          tls: (1)
            - hosts:
                - webapp.example.com
              secretName: webapp-tls (2)
          rules:
            - host: webapp.example.com
              http:
                paths:
                  - path: /
                    pathType: Prefix
                    backend:
                      service:
                        name: webapp-service
                        port:
                          number: 80
        ```
        1.  The `TLS` section specifies TLS settings.
        1.  The `secretName` field is the name of Kubernetes secret that contains the TLS certificate and key.