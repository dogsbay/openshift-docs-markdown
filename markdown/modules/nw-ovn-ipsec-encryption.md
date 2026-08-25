{%- set _mod_docs_content_type = "CONCEPT" %}
# Encryption protocol and IPsec mode {id="nw-ovn-ipsec-encryption_{{ context }}"}

Pod-to-pod IPsec in {{ product_title }} uses `AES-GCM-16-256` in transport mode with a 256-bit key and a 16-byte integrity check value. _Transport mode_ encrypts end-to-end communication by adding an Encapsulated Security Payload (ESP) header to the IP header of the original packet and encrypts the packet data.  {._abstract}

{{ product_title }} does not currently use or support IPsec _Tunnel mode_ for pod-to-pod communication.