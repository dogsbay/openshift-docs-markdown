{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying workload mTLS with SPIRE-issued identities on each cluster {id="zero-trust-manager-mutual-tls-verification_{{ context }}"}

Deploy `httpbin` and `curl` test workloads with {{ spire_full }} (SPIRE) sidecar injection on both clusters, enable `STRICT` mTLS with `ISTIO_MUTUAL`, and verify HTTP connectivity on each cluster. This confirms workloads use SPIRE-issued certificates under `STRICT` mTLS. {._abstract}

**Prerequisites**

*   You have verified that SPIRE is integrated with Istio on each cluster. For more information, see "Verifying SPIRE integration with Istio on each cluster".
*   The environment variables from the "Preparing the environment for multi-cluster {{ spire_full }} federation" and "Deploying {{ spire_full }} with federation on both clusters" procedures are set.
*   Istiod is running and ready on both clusters.

**Procedure**

1.  Set the test environment variables by running the following commands:
    1.  Set the test namespace environment variable:
        ```terminal
        $ export TPJ=test-ossm-with-ztwim
        ```
    1.  Set the SPIFFE audience environment variable:
        ```terminal
        $ export SPIFFE_AUDIENCE="sky-computing-demo"
        ```
1.  Prepare the test namespace on both clusters by running the following commands:
    1.  Create the test namespace on Cluster A:
        ```terminal
        $ oc create namespace ${TPJ} --kubeconfig="${CLUSTER_A_KUBECONFIG}" 2>/dev/null || true
        ```
    1.  Enable Istio injection for the test namespace on Cluster A:
        ```terminal
        $ oc label namespace ${TPJ} istio-injection=enabled \
          --kubeconfig="${CLUSTER_A_KUBECONFIG}" --overwrite
        ```
    1.  Create the test namespace on Cluster B:
        ```terminal
        $ oc create namespace ${TPJ} --kubeconfig="${CLUSTER_B_KUBECONFIG}" 2>/dev/null || true
        ```
    1.  Enable Istio injection for the test namespace on Cluster B:
        ```terminal
        $ oc label namespace ${TPJ} istio-injection=enabled \
          --kubeconfig="${CLUSTER_B_KUBECONFIG}" --overwrite
        ```
1.  Create the `httpbin` server on Cluster A by running the following command:
    1.  Create a YAML file that defines the `httpbin` `ServiceAccount`, `Service`, and `Deployment` on Cluster A:
        ```yaml
        apiVersion: v1
        kind: ServiceAccount
        metadata:
          name: httpbin
          namespace: ${TPJ}
        ---
        apiVersion: v1
        kind: Service
        metadata:
          name: httpbin
          namespace: ${TPJ}
          labels:
            app: httpbin
            service: httpbin
        spec:
          ports:
          - name: http-ex-spiffe
            port: 443
            targetPort: 8080
          - name: http
            port: 80
            targetPort: 8080
          selector:
            app: httpbin
        ---
        apiVersion: apps/v1
        kind: Deployment
        metadata:
          name: httpbin
          namespace: ${TPJ}
        spec:
          replicas: 1
          selector:
            matchLabels:
              app: httpbin
              version: v1
          template:
            metadata:
              annotations:
                inject.istio.io/templates: "sidecar,spire"
                spiffe.io/audience: "${SPIFFE_AUDIENCE}"
              labels:
                app: httpbin
                version: v1
            spec:
              serviceAccountName: httpbin
              containers:
              - image: docker.io/mccutchen/go-httpbin:v2.15.0
                imagePullPolicy: IfNotPresent
                name: httpbin
                ports:
                - containerPort: 8080
        ```
    1.  Apply the YAML file on Cluster A by running the following command:
        ```terminal
        $ oc apply --kubeconfig="${CLUSTER_A_KUBECONFIG}" -f <filename>
        ```
1.  Create the `httpbin` server on Cluster B by running the following command:
    1.  Create a YAML file that defines the `httpbin` `ServiceAccount`, `Service`, and `Deployment` on Cluster B:
        ```yaml
        apiVersion: v1
        kind: ServiceAccount
        metadata:
          name: httpbin
          namespace: ${TPJ}
        ---
        apiVersion: v1
        kind: Service
        metadata:
          name: httpbin
          namespace: ${TPJ}
          labels:
            app: httpbin
            service: httpbin
        spec:
          ports:
          - name: http-ex-spiffe
            port: 443
            targetPort: 8080
          - name: http
            port: 80
            targetPort: 8080
          selector:
            app: httpbin
        ---
        apiVersion: apps/v1
        kind: Deployment
        metadata:
          name: httpbin
          namespace: ${TPJ}
        spec:
          replicas: 1
          selector:
            matchLabels:
              app: httpbin
              version: v1
          template:
            metadata:
              annotations:
                inject.istio.io/templates: "sidecar,spire"
                spiffe.io/audience: "${SPIFFE_AUDIENCE}"
              labels:
                app: httpbin
                version: v1
            spec:
              serviceAccountName: httpbin
              containers:
              - image: docker.io/mccutchen/go-httpbin:v2.15.0
                imagePullPolicy: IfNotPresent
                name: httpbin
                ports:
                - containerPort: 8080
        ```
    1.  Apply the YAML file on Cluster B by running the following command:
        ```terminal
        $ oc apply --kubeconfig="${CLUSTER_B_KUBECONFIG}" -f <filename>
        ```
1.  Wait for the `httpbin` deployment to become available on both clusters by running the following commands:
    1.  Wait for the `httpbin` deployment on Cluster A:
        ```terminal
        $ oc rollout status deployment/httpbin \
          -n "${TPJ}" --kubeconfig="${CLUSTER_A_KUBECONFIG}" --timeout=300s
        ```
    1.  Wait for the `httpbin` deployment on Cluster B:
        ```terminal
        $ oc rollout status deployment/httpbin \
          -n "${TPJ}" --kubeconfig="${CLUSTER_B_KUBECONFIG}" --timeout=300s
        ```
1.  Create the `curl` client on Cluster A by running the following command:
    1.  Create a YAML file that defines the `curl` `ServiceAccount`, `Service`, and `Deployment` on Cluster A:
        ```yaml
        apiVersion: v1
        kind: ServiceAccount
        metadata:
          name: curl
          namespace: ${TPJ}
        ---
        apiVersion: v1
        kind: Service
        metadata:
          name: curl
          namespace: ${TPJ}
          labels:
            app: curl
            service: curl
        spec:
          ports:
          - port: 80
            name: http
          selector:
            app: curl
        ---
        apiVersion: apps/v1
        kind: Deployment
        metadata:
          name: curl
          namespace: ${TPJ}
        spec:
          replicas: 1
          selector:
            matchLabels:
              app: curl
          template:
            metadata:
              annotations:
                inject.istio.io/templates: "sidecar,spire"
                spiffe.io/audience: "${SPIFFE_AUDIENCE}"
              labels:
                app: curl
            spec:
              terminationGracePeriodSeconds: 0
              serviceAccountName: curl
              containers:
              - name: curl
                image: curlimages/curl:8.16.0
                command:
                - /bin/sh
                - -c
                - sleep inf
                imagePullPolicy: IfNotPresent
        ```
    1.  Apply the YAML file on Cluster A by running the following command:
        ```terminal
        $ oc apply --kubeconfig="${CLUSTER_A_KUBECONFIG}" -f <filename>
        ```
1.  Create the `curl` client on Cluster B by running the following command:
    1.  Create a YAML file that defines the `curl` `ServiceAccount`, `Service`, and `Deployment` on Cluster B:
        ```yaml
        apiVersion: v1
        kind: ServiceAccount
        metadata:
          name: curl
          namespace: ${TPJ}
        ---
        apiVersion: v1
        kind: Service
        metadata:
          name: curl
          namespace: ${TPJ}
          labels:
            app: curl
            service: curl
        spec:
          ports:
          - port: 80
            name: http
          selector:
            app: curl
        ---
        apiVersion: apps/v1
        kind: Deployment
        metadata:
          name: curl
          namespace: ${TPJ}
        spec:
          replicas: 1
          selector:
            matchLabels:
              app: curl
          template:
            metadata:
              annotations:
                inject.istio.io/templates: "sidecar,spire"
                spiffe.io/audience: "${SPIFFE_AUDIENCE}"
              labels:
                app: curl
            spec:
              terminationGracePeriodSeconds: 0
              serviceAccountName: curl
              containers:
              - name: curl
                image: curlimages/curl:8.16.0
                command:
                - /bin/sh
                - -c
                - sleep inf
                imagePullPolicy: IfNotPresent
        ```
    1.  Apply the YAML file on Cluster B by running the following command:
        ```terminal
        $ oc apply --kubeconfig="${CLUSTER_B_KUBECONFIG}" -f <filename>
        ```
1.  Wait for the `curl` deployment to become available on both clusters by running the following commands:
    1.  Wait for the `curl` deployment on Cluster A:
        ```terminal
        $ oc rollout status deployment/curl \
          -n "${TPJ}" --kubeconfig="${CLUSTER_A_KUBECONFIG}" --timeout=300s
        ```
    1.  Wait for the `curl` deployment on Cluster B:
        ```terminal
        $ oc rollout status deployment/curl \
          -n "${TPJ}" --kubeconfig="${CLUSTER_B_KUBECONFIG}" --timeout=300s
        ```
1.  Verify that the `curl` client can reach `httpbin` on both clusters before enabling `STRICT` mTLS by running the following commands:
    1.  Verify connectivity on Cluster A:
        ```terminal
        $ oc exec deploy/curl -n "${TPJ}" --kubeconfig="${CLUSTER_A_KUBECONFIG}" -it -- \
          curl -s -o /dev/null -w "%{http_code}" http://httpbin
        ```
    1.  Verify connectivity on Cluster B:
        ```terminal
        $ oc exec deploy/curl -n "${TPJ}" --kubeconfig="${CLUSTER_B_KUBECONFIG}" -it -- \
          curl -s -o /dev/null -w "%{http_code}" http://httpbin
        ```
        ```terminal title="Example output"
        200
        ```

        You must receive an HTTP `200` status code on each cluster.
1.  Enable `STRICT` mTLS between the services on Cluster A by running the following command:
    1.  Create a YAML file that defines the `PeerAuthentication` and `DestinationRule` resources on Cluster A:
        ```yaml
        apiVersion: security.istio.io/v1beta1
        kind: PeerAuthentication
        metadata:
          name: default
          namespace: ${TPJ}
        spec:
          mtls:
            mode: STRICT
        ---
        apiVersion: networking.istio.io/v1
        kind: DestinationRule
        metadata:
          name: curl
          namespace: ${TPJ}
        spec:
          host: curl
          trafficPolicy:
            tls:
              mode: ISTIO_MUTUAL
        ---
        apiVersion: networking.istio.io/v1
        kind: DestinationRule
        metadata:
          name: httpbin
          namespace: ${TPJ}
        spec:
          host: httpbin
          trafficPolicy:
            tls:
              mode: ISTIO_MUTUAL
        ```
    1.  Apply the YAML file on Cluster A by running the following command:
        ```terminal
        $ oc apply --kubeconfig="${CLUSTER_A_KUBECONFIG}" -f <filename>
        ```
1.  Enable `STRICT` mTLS between the services on Cluster B by running the following command:
    1.  Create a YAML file that defines the `PeerAuthentication` and `DestinationRule` resources on Cluster B:
        ```yaml
        apiVersion: security.istio.io/v1beta1
        kind: PeerAuthentication
        metadata:
          name: default
          namespace: ${TPJ}
        spec:
          mtls:
            mode: STRICT
        ---
        apiVersion: networking.istio.io/v1
        kind: DestinationRule
        metadata:
          name: curl
          namespace: ${TPJ}
        spec:
          host: curl
          trafficPolicy:
            tls:
              mode: ISTIO_MUTUAL
        ---
        apiVersion: networking.istio.io/v1
        kind: DestinationRule
        metadata:
          name: httpbin
          namespace: ${TPJ}
        spec:
          host: httpbin
          trafficPolicy:
            tls:
              mode: ISTIO_MUTUAL
        ```
    1.  Apply the YAML file on Cluster B by running the following command:
        ```terminal
        $ oc apply --kubeconfig="${CLUSTER_B_KUBECONFIG}" -f <filename>
        ```
1.  Verify that the `curl` client can reach `httpbin` on both clusters with `STRICT` mTLS enabled by running the following commands:
    1.  Verify connectivity on Cluster A:
        ```terminal
        $ oc exec deploy/curl -n "${TPJ}" --kubeconfig="${CLUSTER_A_KUBECONFIG}" -it -- \
          curl -s -o /dev/null -w "%{http_code}" http://httpbin
        ```
    1.  Verify connectivity on Cluster B:
        ```terminal
        $ oc exec deploy/curl -n "${TPJ}" --kubeconfig="${CLUSTER_B_KUBECONFIG}" -it -- \
          curl -s -o /dev/null -w "%{http_code}" http://httpbin
        ```
        ```terminal title="Example output"
        200
        ```

        If you receive an HTTP `200` status code on each cluster, {{ SMProductName }} workloads are communicating under `STRICT` mTLS using SPIRE-issued identities.
1.  Remove the test namespace from both clusters by running the following commands:
    1.  Remove the test namespace from Cluster A:
        ```terminal
        $ oc delete namespace ${TPJ} --kubeconfig="${CLUSTER_A_KUBECONFIG}" --ignore-not-found
        ```
    1.  Remove the test namespace from Cluster B:
        ```terminal
        $ oc delete namespace ${TPJ} --kubeconfig="${CLUSTER_B_KUBECONFIG}" --ignore-not-found
        ```