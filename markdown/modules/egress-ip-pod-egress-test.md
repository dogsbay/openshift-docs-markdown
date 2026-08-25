{%- set _mod_docs_content_type = "PROCEDURE" %}
# Test the pod egress {id="cloud-experts-consistent-egress-ip-pod-egress-test_{{ context }}"}

Verify that your egress IP configuration works correctly. {._abstract}

**Procedure**

1.  Start an interactive shell to test the pod egress rule:
    ```terminal
    $ oc run \
      demo-egress-pod \
      -it \
      --namespace=demo-egress-pod \
      --env=LOAD_BALANCER_HOSTNAME=$LOAD_BALANCER_HOSTNAME \
      --image=registry.access.redhat.com/ubi9/ubi -- \
      bash
    ```
1.  Send a request to the load balancer by running the following command:
    ```terminal
    $ curl -s http://$LOAD_BALANCER_HOSTNAME
    ```
1.  Check the output for a successful connection:

    :::note

    The `client_address` is the internal IP address of the load balancer, not your egress IP. You can verify that you have configured the client address correctly by connecting with your service limited to `.spec.loadBalancerSourceRanges`.
    
    :::

    ```terminal title="Example output"
    CLIENT VALUES:
    client_address=10.10.207.247
    command=GET
    real path=/
    query=nil
    request_version=1.1
    request_uri=http://internal-a3e61de18bfca4a53a94a208752b7263-148284314.us-east-1.elb.amazonaws.com:8080/

    SERVER VALUES:
    server_version=nginx: 1.10.0 - lua: 10001

    HEADERS RECEIVED:
    accept=*/*
    host=internal-a3e61de18bfca4a53a94a208752b7263-148284314.us-east-1.elb.amazonaws.com
    user-agent=curl/7.76.1
    BODY:
    -no body in request-
    ```
1.  Exit the pod by running the following command:
    ```terminal
    $ exit
    ```