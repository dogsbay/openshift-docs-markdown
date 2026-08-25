---
title: Securing routes with the {{ cert_manager_operator }}
---

# Securing routes with the {{ cert_manager_operator }} {#cert-manager-securing-routes}

In the OpenShift Container Platform, the route API is extended to provide a configurable option to reference TLS certificates via secrets. With externally managed certificates enabled, you can minimize errors from manual intervention, streamline the certificate management process, and enable the OpenShift Container Platform router to promptly serve the referenced certificate.

## Additional resources {#additional-resources_cert-manager-securing-routes}

- [Creating a route with externally managed certificate](/networking/ingress_load_balancing/routes/nw-configuring-routes#nw-ingress-route-secret-load-external-cert_secured-routes)
- [Configuring an ACME issuer](/security/cert_manager_operator/cert-manager-operator-issuer-acme#cert-manager-operator-issuer-acme)
- [Externally managed certificates](/networking/ingress_load_balancing/routes/securing-routes#nw-ingress-route-secret-load-external-cert_secured-routes)
