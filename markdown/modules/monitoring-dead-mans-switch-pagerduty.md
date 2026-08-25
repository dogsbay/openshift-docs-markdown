## Dead man’s switch PagerDuty {id="dead-mans-switch-pagerduty_{{ context }}"}

[PagerDuty](https://www.pagerduty.com/) supports "Dead man’s switch" through an integration called [Dead Man’s Snitch](https://deadmanssnitch.com/). You can enable it.

**Procedure**

*   Add a `PagerDuty` configuration to the default `deadmansswitch` receiver.

    For example, you can configure Dead Man’s Snitch to page the operator if the "Dead man’s switch" alert is silent for 15 minutes. With the default Alertmanager configuration, the Dead man’s switch alert is repeated every five minutes. If Dead Man’s Snitch triggers after 15 minutes, it indicates that the notification has been unsuccessful at least twice.

**Additional resources**
{._additional-resources}

*   To learn how to configure Dead Man’s Snitch for PagerDuty, see [Dead Man’s Snitch Integration Guide](https://www.pagerduty.com/docs/guides/dead-mans-snitch-integration-guide/).