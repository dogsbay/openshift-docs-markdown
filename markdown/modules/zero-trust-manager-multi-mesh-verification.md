{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying cross-cluster service communication {id="zero-trust-manager-multi-mesh-verification_{{ context }}"}

Verify cross-cluster service communication between {{ SMProductName }} clusters using sample workloads. This confirms SPIRE-issued identities and federated mesh routing enable end-to-end cross-cluster communication. {._abstract}

**Prerequisites**

*   You have deployed east-west gateways and created the cross-network `Gateway` CR on both clusters.
*   You have exchanged remote secrets between clusters.

**Procedure**

1.  Set the sample namespace environment variable by running the following command:
    ```terminal
    $ export SAMPLE_NS=sample
    ```
1.  Create the `sample` namespace on Cluster A by running the following command:
    ```terminal
    $ oc create namespace ${SAMPLE_NS} --kubeconfig="${CLUSTER_A_KUBECONFIG}" 2>/dev/null || true
    ```
1.  Enable Istio injection for the `sample` namespace on Cluster A by running the following command:
    ```terminal
    $ oc label namespace ${SAMPLE_NS} istio-injection=enabled \
      --kubeconfig="${CLUSTER_A_KUBECONFIG}" --overwrite
    ```
1.  Create the `sample` namespace on Cluster B by running the following command:
    ```terminal
    $ oc create namespace ${SAMPLE_NS} --kubeconfig="${CLUSTER_B_KUBECONFIG}" 2>/dev/null || true
    ```
1.  Enable Istio injection for the `sample` namespace on Cluster B by running the following command:
    ```terminal
    $ oc label namespace ${SAMPLE_NS} istio-injection=enabled \
      --kubeconfig="${CLUSTER_B_KUBECONFIG}" --overwrite
    ```
1.  Install the Istio `HelloWorld` `Service` in Cluster B by running the following command:
    1.  Create a YAML file that defines the `HelloWorld` `Service` in Cluster B:
        ```yaml
        apiVersion: v1
        kind: Service
        metadata:
          name: helloworld
          labels:
            app: helloworld
            service: helloworld
        spec:
          ports:
          - port: 5000
            name: http
          selector:
            app: helloworld
        ```
    1.  Apply the YAML file in Cluster B by running the following command:
        ```terminal
        $ oc apply --kubeconfig="${CLUSTER_B_KUBECONFIG}" -n ${SAMPLE_NS} -f <filename>
        ```
1.  Install the `helloworld-v1` `Deployment` in Cluster B by running the following command:
    1.  Create a YAML file that defines the `helloworld-v1` `Deployment` in Cluster B:
        ```yaml
        apiVersion: apps/v1
        kind: Deployment
        metadata:
          name: helloworld-v1
          labels:
            app: helloworld
            version: v1
        spec:
          replicas: 1
          selector:
            matchLabels:
              app: helloworld
              version: v1
          template:
            metadata:
              labels:
                app: helloworld
                version: v1
            spec:
              containers:
              - name: helloworld
                image: registry.istio.io/release/examples-helloworld-v1:1.0
                resources:
                  requests:
                    cpu: "100m"
                imagePullPolicy: IfNotPresent
                ports:
                - containerPort: 5000
        ```
    1.  Apply the YAML file in Cluster B by running the following command:
        ```terminal
        $ oc apply --kubeconfig="${CLUSTER_B_KUBECONFIG}" -n ${SAMPLE_NS} -f <filename>
        ```
1.  Install the Istio `HelloWorld` `Service` in Cluster A by running the following command:
    1.  Create a YAML file that defines the `HelloWorld` `Service` in Cluster A:
        ```yaml
        apiVersion: v1
        kind: Service
        metadata:
          name: helloworld
          labels:
            app: helloworld
            service: helloworld
        spec:
          ports:
          - port: 5000
            name: http
          selector:
            app: helloworld
        ```
    1.  Apply the YAML file in Cluster A by running the following command:
        ```terminal
        $ oc apply --kubeconfig="${CLUSTER_A_KUBECONFIG}" -n ${SAMPLE_NS} -f <filename>
        ```
1.  Install the `sleep` client in Cluster A by running the following command:
    1.  Create a YAML file that defines the `sleep` `ServiceAccount`, `Service`, and `Deployment` in Cluster A:
        ```yaml
        apiVersion: v1
        kind: ServiceAccount
        metadata:
          name: sleep
        ---
        apiVersion: v1
        kind: Service
        metadata:
          name: sleep
          labels:
            app: sleep
            service: sleep
        spec:
          ports:
          - port: 80
            name: http
          selector:
            app: sleep
        ---
        apiVersion: apps/v1
        kind: Deployment
        metadata:
          name: sleep
        spec:
          replicas: 1
          selector:
            matchLabels:
              app: sleep
          template:
            metadata:
              labels:
                app: sleep
            spec:
              terminationGracePeriodSeconds: 0
              serviceAccountName: sleep
              containers:
              - name: sleep
                image: docker.io/curlimages/curl:8.16.0
                command: ["/bin/sleep", "infinity"]
                imagePullPolicy: IfNotPresent
                volumeMounts:
                - mountPath: /etc/sleep/tls
                  name: secret-volume
              volumes:
              - name: secret-volume
                secret:
                  secretName: sleep-secret
                  optional: true
        ```
    1.  Apply the YAML file in Cluster A by running the following command:
        ```terminal
        $ oc apply --kubeconfig="${CLUSTER_A_KUBECONFIG}" -n ${SAMPLE_NS} -f <filename>
        ```
1.  Add the SPIRE injection template to the `sleep` application in Cluster A by running the following command:
    ```terminal
    $ oc patch deploy sleep \
        -n ${SAMPLE_NS} \
        --type='merge' \
        --kubeconfig="${CLUSTER_A_KUBECONFIG}" \
        -p '{"spec": {"template": {"metadata": {"annotations": {"inject.istio.io/templates": "sidecar,spire"}}}}}'
    ```
1.  Add the SPIRE injection template to the `HelloWorld` application in Cluster B by running the following command:
    ```terminal
    $ oc patch deploy helloworld-v1 \
       -n ${SAMPLE_NS} \
       --type='merge' \
       --kubeconfig="${CLUSTER_B_KUBECONFIG}" \
        -p '{"spec": {"template": {"metadata": {"annotations": {"inject.istio.io/templates": "sidecar,spire"}}}}}'
    ```
1.  Wait for the `sleep` deployment to become available on Cluster A by running the following command:
    ```terminal
    $ oc rollout status deploy/sleep --kubeconfig "${CLUSTER_A_KUBECONFIG}" -n ${SAMPLE_NS} --timeout=300s
    ```
1.  Wait for the `helloworld-v1` deployment to become available on Cluster B by running the following command:
    ```terminal
    $ oc rollout status deploy/helloworld-v1 --kubeconfig "${CLUSTER_B_KUBECONFIG}" -n ${SAMPLE_NS} --timeout=300s
    ```
1.  Verify that the `sleep` pod uses a SPIRE-issued identity by running the following command:
    ```terminal
    $ oc exec deploy/sleep -n ${SAMPLE_NS} --kubeconfig="${CLUSTER_A_KUBECONFIG}" -c istio-proxy -- \
      curl -s localhost:15000/certs | jq -r '.certificates[0].cert_chain[0].subject_alt_names[0].uri'
    ```
    ```text title="Example output"
    spiffe://${CLUSTER_A_TRUST_DOMAIN}/ns/sample/sa/sleep
    ```
1.  Verify that the `sleep` pod on Cluster A can reach the `helloworld.sample` service by running the following command:
    ```terminal
    $ oc exec deploy/sleep \
      -n ${SAMPLE_NS} \
      --kubeconfig="${CLUSTER_A_KUBECONFIG}" \
      -- curl -sS helloworld.sample:5000/hello
    ```
    ```text title="Example output"
    Hello version: v1, instance: helloworld-v1-5859666d7-pcb8v
    ```