{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploy a sample application {id="cloud-experts-consistent-egress-ip-deploy-sample-app_{{ context }}"}

To test the egress IP rule, create a service that is restricted to the egress IP addresses that you specified. The service simulates an external service that expects a small subset of IP addresses. {._abstract}

**Procedure**

1.  Run the `echoserver` command to replicate a request:
    ```terminal
    $ oc -n default run demo-service --image=gcr.io/google_containers/echoserver:1.4
    ```
1.  Expose the pod as a service and limit the ingress to the egress IP addresses you specified by running the following command:
    ```terminal
    $ cat <<EOF | oc apply -f -
    apiVersion: v1
    kind: Service
    metadata:
      name: demo-service
      namespace: default
      annotations:
        service.beta.kubernetes.io/aws-load-balancer-scheme: "internal"
        service.beta.kubernetes.io/aws-load-balancer-internal: "true"
    spec:
      selector:
        run: demo-service
      ports:
        - port: 80
          targetPort: 8080
      type: LoadBalancer
      externalTrafficPolicy: Local
      # NOTE: this limits the source IPs that are allowed to connect to our service.  It
      #       is being used as part of this demo, restricting connectivity to our egress
      #       IP addresses only.
      # NOTE: these egress IPs are within the subnet range(s) in which my worker nodes
      #       are deployed.
      loadBalancerSourceRanges:
        - 10.10.100.254/32
        - 10.10.150.254/32
        - 10.10.200.254/32
        - 10.10.100.253/32
        - 10.10.150.253/32
        - 10.10.200.253/32
    EOF
    ```
1.  Retrieve the load balancer hostname and save it as an environment variable by running the following command:
    ```terminal
    $ export LOAD_BALANCER_HOSTNAME=$(oc get svc -n default demo-service -o json | jq -r '.status.loadBalancer.ingress[].hostname')
    ```