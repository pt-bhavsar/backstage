/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export type Incident = {
  id: string;
  title: string;
  status: string;
  homepageUrl: string;
  assignments: [
    {
      assignee: User;
    },
  ];
  serviceId: string;
  created_at: string;
};

export type Service = {
  id: string;
  name: string;
  html_url: string;
  integrationKey: string;
  escalation_policy: PagerDutyEscalationPolicy;
};

export type ResponseService = {
  services: Service[];
  more: boolean;
};

export type ResponseOncall = {
  id: string;
  name: string;
  email: string;
  homepageUrl: string;
};

export type Options = {
  method: string;
  headers: HeadersInit;
  body?: BodyInit;
};

export type PagerDutyClientConfig = {
  token?: string;
};

export type ServicesResponse = {
  services: Service[];
};

export type IncidentResponse = {
  incidents: Incident[];
};

export type OncallsResponse = {
  oncalls: Oncall[];
};

export type PagerDutyEscalationPolicy = {
  user: User;
};

export type User = {
  id: string;
  summary: string;
  email: string;
  html_url: string;
  name: string;
};

export type Oncall = {
  escalation_policy: PagerDutyEscalationPolicy;
  user: User;
};