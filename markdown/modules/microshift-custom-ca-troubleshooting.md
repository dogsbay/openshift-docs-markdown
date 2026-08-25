{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshoot custom certificates {id="microshift-custom-ca-troubleshootin_{{ context }}"}

To troubleshoot the implementation of custom certificates, you can take the following steps. {._abstract}

**Procedure**

1.  From {{ microshift_short }}, ensure that the certificate is served by the `kube-apiserver` and verify that the certificate path is appended to the `--tls-sni-cert-key` FLAG by running the following command:
    ```terminal
    $ journalctl -u microshift -b0 | grep tls-sni-cert-key
    ```
    ```terminal title="Example output"
    Jan 24 14:53:00 localhost.localdomain microshift[45313]: kube-apiserver I0124 14:53:00.649099   45313 flags.go:64] FLAG: --tls-sni-cert-key="[/home/eslutsky/dev/certs/server.crt,/home/eslutsky/dev/certs/server.key;/var/lib/microshift/certs/kube-apiserver-external-signer/kube-external-serving/server.crt,/var/lib/microshift/certs/kube-apiserver-external-signer/kube-external-serving/server.key;/var/lib/microshift/certs/kube-apiserver-localhost-signer/kube-apiserver-localhost-serving/server.crt,/var/lib/microshift/certs/kube-apiserver-localhost-signer/kube-apiserver-localhost-serving/server.key;/var/lib/microshift/certs/kube-apiserver-service-network-signer/kube-apiserver-service-network-serving/server.crt,/var/lib/microshift/certs/kube-apiserver-service-network-signer/kube-apiserver-service-network-serving/server.key
    ```
1.  From the client, ensure that the `kube-apiserver` is serving the correct certificate by running the following command:
    ```terminal
    $ openssl s_client -connect <SNI_ADDRESS>:6443 -showcerts | openssl x509 -text -noout -in - | grep -C 1 "Alternative\|CN"
    ```