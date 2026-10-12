{%- set _mod_docs_content_type = "CONCEPT" %}
# Certificates managed by etcd {id="troubleshooting-certs-auto-etcd_{{ context }}"}

The etcd certificates encrypt communication between etcd member peers and client traffic. Certificates renew automatically if all nodes and services can communicate, so renew them in advance if the cluster might lose communication near the end of the certificate lifetime. {._abstract}

*   You can manually renew etcd certificates by running the following command:
    ```terminal
    $ for each in $(oc get secret -n openshift-etcd | grep "kubernetes.io/tls" | grep -e \
    "etcd-peer\|etcd-serving" | awk '{print $1}'); do oc get secret $each -n openshift-etcd -o \
    jsonpath="{.data.tls\.crt}" | base64 -d | openssl x509 -noout -enddate; done
    ```

For more information about updating etcd certificates, see "Checking etcd certificate expiry in OpenShift 4".
For more information about etcd certificates, see "etcd certificates" in _Security and compliance_.